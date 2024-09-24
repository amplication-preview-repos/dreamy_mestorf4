import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PushLogServiceBase } from "./base/pushLog.service.base";

@Injectable()
export class PushLogService extends PushLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
