import { Module } from "@nestjs/common";
import { SalesService } from "./sales.service";
import { SalesController } from "./sales.controller";
import { SalesResolver } from "./sales.resolver";
import { SalesRepository } from "./sales.repository";

@Module({
  imports: [],
  controllers: [SalesController],
  providers: [SalesService, SalesResolver, SalesRepository],
  exports: [SalesService],
})
export class SalesModule {}
