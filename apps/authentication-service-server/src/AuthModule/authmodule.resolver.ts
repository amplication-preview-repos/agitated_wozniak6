import * as graphql from "@nestjs/graphql";
import { AuthModuleService } from "./authmodule.service";

export class AuthModuleResolver {
  constructor(protected readonly service: AuthModuleService) {}

  @graphql.Mutation(() => String)
  async LoginEmail(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.LoginEmail(args);
  }

  @graphql.Mutation(() => String)
  async LoginGoogle(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.LoginGoogle(args);
  }

  @graphql.Mutation(() => String)
  async LoginGoogleCallback(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.LoginGoogleCallback(args);
  }

  @graphql.Query(() => String)
  async VerifyJwt(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.VerifyJwt(args);
  }
}
