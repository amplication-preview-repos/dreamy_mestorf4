import { SortOrder } from "../../util/SortOrder";

export type PushLogOrderByInput = {
  createdAt?: SortOrder;
  errorInfo?: SortOrder;
  id?: SortOrder;
  messageId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
