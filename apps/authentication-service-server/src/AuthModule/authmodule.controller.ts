import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthModuleService } from "./authmodule.service";

@swagger.ApiTags("authModules")
@common.Controller("authModules")
export class AuthModuleController {
  constructor(protected readonly service: AuthModuleService) {}

  @common.Post("/login/email")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LoginEmail(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.LoginEmail(body);
      }

  @common.Get("/login/google")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LoginGoogle(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.LoginGoogle(body);
      }

  @common.Get("/login/google/callback")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LoginGoogleCallback(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.LoginGoogleCallback(body);
      }

  @common.Get("/verify")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VerifyJwt(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.VerifyJwt(body);
      }
}
