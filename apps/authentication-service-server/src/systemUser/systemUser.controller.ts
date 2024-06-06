import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SystemUserService } from "./systemUser.service";
import { SystemUserControllerBase } from "./base/systemUser.controller.base";

@swagger.ApiTags("systemUsers")
@common.Controller("systemUsers")
export class SystemUserController extends SystemUserControllerBase {
  constructor(
    protected readonly service: SystemUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
