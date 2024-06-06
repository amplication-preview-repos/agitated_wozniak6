import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type SystemUserCreateInput = {
  email?: string | null;
  role?: RoleWhereUniqueInput | null;
};
