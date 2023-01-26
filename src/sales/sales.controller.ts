import * as common from "@nestjs/common";
import { Body, Post } from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Sales } from "@prisma/client";
import * as nestAccessControl from "nest-access-control";
import { SalesService } from "./sales.service";
import { CreateSalesBodyDTO } from './sales.dto';


@swagger.ApiTags("sales")
@common.Controller("sales")
export class SalesController {
  constructor(
    protected readonly service: SalesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
  }

  @Post('')
  async createSales(@Body() data: CreateSalesBodyDTO): Promise<Sales> {
    return this.service.createSalesService(data);
  }
}
