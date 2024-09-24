import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type PushLogCreateInput = {
  errorInfo?: string | null;
  message?: MessageWhereUniqueInput | null;
  status?: "Option1" | null;
};
