import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type PushLogUpdateInput = {
  errorInfo?: string | null;
  message?: MessageWhereUniqueInput | null;
  status?: "Option1" | null;
};
