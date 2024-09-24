import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "typeField";

export const MessageTitle = (record: TMessage): string => {
  return record.typeField?.toString() || String(record.id);
};
