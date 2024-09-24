import { PushLogUpdateManyWithoutMessagesInput } from "./PushLogUpdateManyWithoutMessagesInput";

export type MessageUpdateInput = {
  content?: string | null;
  pushLogs?: PushLogUpdateManyWithoutMessagesInput;
  status?: "Option1" | null;
  typeField?: string | null;
};
