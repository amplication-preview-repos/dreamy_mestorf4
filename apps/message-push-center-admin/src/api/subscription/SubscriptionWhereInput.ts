import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionWhereInput = {
  id?: StringFilter;
  messageType?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
