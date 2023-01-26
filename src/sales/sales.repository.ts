import { Injectable } from '@nestjs/common';
import { Sales } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSalesBodyDTO } from './sales.dto';

@Injectable()
export class SalesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createSalesDB(data:CreateSalesBodyDTO): Promise<Sales> {
    return this.prisma.sales.create({ data });
  }
}