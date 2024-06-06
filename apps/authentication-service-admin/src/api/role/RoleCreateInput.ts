import { SystemUserCreateNestedManyWithoutRolesInput } from "./SystemUserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name?: string | null;
  roleName?: string | null;
  systemUsers?: SystemUserCreateNestedManyWithoutRolesInput;
};
