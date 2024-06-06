import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SystemUserModuleBase } from "./base/systemUser.module.base";
import { SystemUserService } from "./systemUser.service";
import { SystemUserController } from "./systemUser.controller";
import { SystemUserResolver } from "./systemUser.resolver";

@Module({
  imports: [SystemUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [SystemUserController],
  providers: [SystemUserService, SystemUserResolver],
  exports: [SystemUserService],
})
export class SystemUserModule {}
