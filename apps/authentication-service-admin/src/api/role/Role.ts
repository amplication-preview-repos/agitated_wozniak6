import { SystemUser } from "../systemUser/SystemUser";

export type Role = {
  createdAt: Date;
  id: string;
  name: string | null;
  roleName: string | null;
  systemUsers?: Array<SystemUser>;
  updatedAt: Date;
};
