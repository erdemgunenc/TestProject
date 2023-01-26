import * as common from "@nestjs/common";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SalesService } from "./sales.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SalesResolver  {
  constructor(
    protected readonly service: SalesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
  }
}
