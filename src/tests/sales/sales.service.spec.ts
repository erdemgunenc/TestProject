import { PrismaService } from "nestjs-prisma";
import { SalesService } from '../../sales/sales.service';
import { SalesRepository } from '../../sales/sales.repository';
import { createRandomAddress, createRandomCustomer, createRandomOrder } from '../faker/faker';
import { OrderService } from "../../order/order.service";
import { OrderRepository } from "../../order/order.repository";

describe("Testing the SalesService", () => {
  let prismaService: PrismaService;
  let orderService: OrderService;
  let salesService: SalesService;
  let salesRepository: SalesRepository;
  let orderRepository: OrderRepository;

  describe("Preparing sales service and repository before testing.", () => {
    beforeEach(() => {
      prismaService = new PrismaService();
      orderRepository = new OrderRepository(prismaService);
      orderService = new OrderService(prismaService, orderRepository);
      salesRepository = new SalesRepository(prismaService);
      salesService = new SalesService(prismaService, salesRepository, orderService);
    });
    it("should create sales record sucessfully.", async () => {
      const randomAddress = createRandomAddress();
      const randomCustomer = createRandomCustomer();
      const randomOrder = createRandomOrder();

      const address = await prismaService.address.create(
        {
          data: {
            address_1: randomAddress.address_1,
            address_2: randomAddress.address_2,
            city: randomAddress.city,
            createdAt: randomAddress.createdAt,
            updatedAt: randomAddress.updatedAt,
            state: randomAddress.state,
            zip: randomAddress.zip,
          }
        });
      const customer = await prismaService.customer.create(
        {
          data: {
            addressId: address.id,
            createdAt: randomCustomer.createdAt,
            email: randomCustomer.email,
            firstName: randomCustomer.firstName,
            lastName: randomCustomer.lastName,
            phone: randomCustomer.phone,
            updatedAt: randomCustomer.updatedAt,
          }
        });
      const order = await prismaService.order.create(
        {
          data: {
            createdAt: randomOrder.createdAt,
            customerId: customer.id,
            discount: randomOrder.discount,
            quantity: randomOrder.quantity,
            totalPrice: randomOrder.totalPrice,
            updatedAt: randomOrder.updatedAt
          }
        });
      const sales = await salesService.createSalesService({ orderId: order.id });

      expect(sales).toBeDefined();
      expect(sales.orderId).toBe(order.id);
    });
	
	it("should throw an error.", async () => {
		try {
		  const orderId = "cldc5loz70001ss3cmxjblv1d";
		  const sales = await salesService.createSalesService({ orderId });
		}
		catch(err) {
		  expect((err as Error).message).toBe("Order not found !");
		}
	  });
  });
});
