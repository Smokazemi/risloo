import { Avatar } from "./Avatar";

export type Detail = {
  title: string;
  description: string | null;
  address: string | null;
  avatar: Avatar[];
  phone_numbers: string[] | null;
};
