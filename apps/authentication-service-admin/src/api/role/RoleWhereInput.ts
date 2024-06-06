import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SystemUserListRelationFilter } from "../systemUser/SystemUserListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  roleName?: StringNullableFilter;
  systemUsers?: SystemUserListRelationFilter;
};
