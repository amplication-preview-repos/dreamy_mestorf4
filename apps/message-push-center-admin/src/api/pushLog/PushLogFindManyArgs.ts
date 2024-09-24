import { PushLogWhereInput } from "./PushLogWhereInput";
import { PushLogOrderByInput } from "./PushLogOrderByInput";

export type PushLogFindManyArgs = {
  where?: PushLogWhereInput;
  orderBy?: Array<PushLogOrderByInput>;
  skip?: number;
  take?: number;
};
