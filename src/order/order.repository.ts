import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class OrderRepository {
  constructor(private readonly prisma: PrismaService) { }

  async getOrderDB(orderId: string) {
    return this.prisma.order.findUnique({ where: { id: orderId } });
  }
}