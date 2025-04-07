export type Avatar = {
  id: string;
  file_name: string;
  slug: string;
  mode: "large" | "medium" | "original" | "small";
  url: string;
  type: "image" | string;
  mime: string;
  exec: string;
};
