import { Role } from "../role/Role";

export type SystemUser = {
  createdAt: Date;
  email: string | null;
  id: string;
  role?: Role | null;
  updatedAt: Date;
};
