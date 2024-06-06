import { SystemUserWhereInput } from "./SystemUserWhereInput";
import { SystemUserOrderByInput } from "./SystemUserOrderByInput";

export type SystemUserFindManyArgs = {
  where?: SystemUserWhereInput;
  orderBy?: Array<SystemUserOrderByInput>;
  skip?: number;
  take?: number;
};
