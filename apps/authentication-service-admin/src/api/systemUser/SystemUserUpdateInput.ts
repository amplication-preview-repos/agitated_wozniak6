import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type SystemUserUpdateInput = {
  email?: string | null;
  role?: RoleWhereUniqueInput | null;
};
