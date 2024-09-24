import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type PushLogWhereInput = {
  errorInfo?: StringNullableFilter;
  id?: StringFilter;
  message?: MessageWhereUniqueInput;
  status?: "Option1";
};
