# Risloo Web Application

A Next.js-based counseling center management system.

## Prerequisites

- Docker Desktop for Mac
- Docker Compose

## Docker Deployment

### Production Deployment

1. Build and start all services:
```bash
# Build the Docker images
docker compose build

# Start the services in detached mode
docker compose up -d

# Main application: http://localhost:3000
# Storybook: http://localhost:6006
```

- Node.js 18.x or higher
- npm 9.x or higher

## Installation

```bash
npm install
```
# or
```bash
npm install
```
# or
```bash
pnpm install
```

## Development
```bash
npm run dev
```
# or
```bash
yarn dev
```
# or
```bash
pnpm dev
```
after that open (URL_ADDRESS://localhost:3000) with your browser to see the result.

## Running Storybook
```bash
npm run storybook
```
# or
```bash
yarn storybook
```
# or
```bash
pnpm storybook
```
after that open (URL_ADDRESS://localhost:6006) with your browser to see the result.
