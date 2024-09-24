import { PushLog as TPushLog } from "../api/pushLog/PushLog";

export const PUSHLOG_TITLE_FIELD = "id";

export const PushLogTitle = (record: TPushLog): string => {
  return record.id?.toString() || String(record.id);
};
