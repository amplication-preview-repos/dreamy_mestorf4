import { User } from "../user/User";

export type Subscription = {
  createdAt: Date;
  id: string;
  messageType: string | null;
  updatedAt: Date;
  user?: User | null;
};
