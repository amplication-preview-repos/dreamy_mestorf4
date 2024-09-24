import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  messageType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
