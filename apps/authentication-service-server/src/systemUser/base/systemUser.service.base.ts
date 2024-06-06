/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  SystemUser as PrismaSystemUser,
  Role as PrismaRole,
} from "@prisma/client";

export class SystemUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SystemUserCountArgs, "select">
  ): Promise<number> {
    return this.prisma.systemUser.count(args);
  }

  async systemUsers<T extends Prisma.SystemUserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SystemUserFindManyArgs>
  ): Promise<PrismaSystemUser[]> {
    return this.prisma.systemUser.findMany<Prisma.SystemUserFindManyArgs>(args);
  }
  async systemUser<T extends Prisma.SystemUserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SystemUserFindUniqueArgs>
  ): Promise<PrismaSystemUser | null> {
    return this.prisma.systemUser.findUnique(args);
  }
  async createSystemUser<T extends Prisma.SystemUserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SystemUserCreateArgs>
  ): Promise<PrismaSystemUser> {
    return this.prisma.systemUser.create<T>(args);
  }
  async updateSystemUser<T extends Prisma.SystemUserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SystemUserUpdateArgs>
  ): Promise<PrismaSystemUser> {
    return this.prisma.systemUser.update<T>(args);
  }
  async deleteSystemUser<T extends Prisma.SystemUserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SystemUserDeleteArgs>
  ): Promise<PrismaSystemUser> {
    return this.prisma.systemUser.delete(args);
  }

  async getRole(parentId: string): Promise<PrismaRole | null> {
    return this.prisma.systemUser
      .findUnique({
        where: { id: parentId },
      })
      .role();
  }
}