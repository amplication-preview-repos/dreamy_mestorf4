import { PushLogCreateNestedManyWithoutMessagesInput } from "./PushLogCreateNestedManyWithoutMessagesInput";

export type MessageCreateInput = {
  content?: string | null;
  pushLogs?: PushLogCreateNestedManyWithoutMessagesInput;
  status?: "Option1" | null;
  typeField?: string | null;
};
