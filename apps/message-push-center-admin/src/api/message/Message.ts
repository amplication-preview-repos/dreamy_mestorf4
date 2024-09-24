import { PushLog } from "../pushLog/PushLog";

export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  pushLogs?: Array<PushLog>;
  status?: "Option1" | null;
  typeField: string | null;
  updatedAt: Date;
};
