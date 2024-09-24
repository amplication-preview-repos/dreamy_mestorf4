import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PushLogService } from "./pushLog.service";
import { PushLogControllerBase } from "./base/pushLog.controller.base";

@swagger.ApiTags("pushLogs")
@common.Controller("pushLogs")
export class PushLogController extends PushLogControllerBase {
  constructor(
    protected readonly service: PushLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
