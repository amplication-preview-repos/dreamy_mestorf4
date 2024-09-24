import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "messageType";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.messageType?.toString() || String(record.id);
};
