import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PushLogListRelationFilter } from "../pushLog/PushLogListRelationFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  pushLogs?: PushLogListRelationFilter;
  status?: "Option1";
  typeField?: StringNullableFilter;
};
