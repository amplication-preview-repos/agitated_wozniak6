import { SystemUserUpdateManyWithoutRolesInput } from "./SystemUserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string | null;
  roleName?: string | null;
  systemUsers?: SystemUserUpdateManyWithoutRolesInput;
};
