# Base stage for shared dependencies
FROM node:18-alpine AS base
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY --chown=node:node package*.json ./
RUN mkdir -p /app/node_modules && chown -R node:node /app
USER node
RUN pnpm install --no-frozen-lockfile
COPY --chown=node:node . .

# Development stage
FROM base AS development
EXPOSE 3000 6006
CMD ["pnpm", "dev"]

# Production build stage
FROM base AS builder
USER root
RUN apk add --no-cache python3 make g++ git
USER node
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN pnpm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
USER node
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "server.js"]

# Storybook build stage
FROM base AS storybook-builder
RUN pnpm run build-storybook

# Storybook stage
FROM nginx:alpine AS storybook
COPY --from=storybook-builder /app/storybook-static /usr/share/nginx/html
EXPOSE 80