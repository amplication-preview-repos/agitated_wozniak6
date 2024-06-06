import { SystemUser as TSystemUser } from "../api/systemUser/SystemUser";

export const SYSTEMUSER_TITLE_FIELD = "id";

export const SystemUserTitle = (record: TSystemUser): string => {
  return record.id?.toString() || String(record.id);
};
