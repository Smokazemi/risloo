import { Avatar } from "./Avatar";

export type Manager = {
  id: string;
  name: string;
  user_id: string;
  avatar: Avatar[] | null;
};
