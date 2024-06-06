import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthModuleService {
  constructor() {}
  async LoginEmail(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async LoginGoogle(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async LoginGoogleCallback(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async VerifyJwt(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
