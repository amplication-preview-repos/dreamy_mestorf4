import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionUpdateInput = {
  messageType?: string | null;
  user?: UserWhereUniqueInput | null;
};
