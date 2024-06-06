import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SystemUserServiceBase } from "./base/systemUser.service.base";

@Injectable()
export class SystemUserService extends SystemUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
