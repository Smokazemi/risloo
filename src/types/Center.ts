import { Manager } from "./Manager";
import { Detail } from "./Detail";

export type Center = {
  id: string;
  manager: Manager;
  acceptation: null | string;
  status: "active" | string;
  type: "counseling_center" | string;
  detail: Detail;
  created_at: number;
};
