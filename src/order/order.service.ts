import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderServiceBase } from "./base/order.service.base";
import { OrderRepository } from "./order.repository";

@Injectable()
export class OrderService extends OrderServiceBase {
  constructor(protected readonly prisma: PrismaService,
    protected readonly orderRepository: OrderRepository) {
    super(prisma);
  }
  async getOrderService(orderId: string){
    return this.orderRepository.getOrderDB(orderId);
  }
}
