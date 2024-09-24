import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionCreateInput = {
  messageType?: string | null;
  user?: UserWhereUniqueInput | null;
};
