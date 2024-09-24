import { Message } from "../message/Message";

export type PushLog = {
  createdAt: Date;
  errorInfo: string | null;
  id: string;
  message?: Message | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
