import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type SystemUserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  role?: RoleWhereUniqueInput;
};
