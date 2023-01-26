import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesRepository } from "./sales.repository";
import { CreateSalesBodyDTO } from './sales.dto';
import { Sales } from "@prisma/client";
import { OrderService } from "../order/order.service";

@Injectable()
export class SalesService {
  constructor(protected readonly prisma: PrismaService,
    protected readonly salesRepository: SalesRepository,
    protected readonly orderService: OrderService) {

  }

  async createSalesService(data:CreateSalesBodyDTO): Promise<Sales>{
    const order = await this.orderService.getOrderService(data.orderId);
    if(!order) {
      throw new Error('Order not found !');
    }
    return this.salesRepository.createSalesDB(data);
  }
}
