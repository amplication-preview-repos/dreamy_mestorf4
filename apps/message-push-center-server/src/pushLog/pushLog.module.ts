import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PushLogModuleBase } from "./base/pushLog.module.base";
import { PushLogService } from "./pushLog.service";
import { PushLogController } from "./pushLog.controller";
import { PushLogResolver } from "./pushLog.resolver";

@Module({
  imports: [PushLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [PushLogController],
  providers: [PushLogService, PushLogResolver],
  exports: [PushLogService],
})
export class PushLogModule {}
