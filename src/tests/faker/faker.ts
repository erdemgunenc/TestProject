import { faker } from '@faker-js/faker';
import { Address } from '../../address/base/Address';
import { Customer } from '../../customer/base/Customer';
import { Order } from '../../order/base/Order';

export function createRandomAddress(): Address {
    return {
      address_1: faker.address.city(),
      address_2: faker.address.city(),
      city: faker.address.city(),
      createdAt: new Date(),
      updatedAt: new Date(),
      customers: [],
      id: 'null',
      state: faker.address.state(),
      zip: parseInt(faker.address.zipCode()),
    };
}

export function createRandomCustomer(): Customer {
    return {
      address: createRandomAddress(),
      createdAt: new Date(),
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      orders: [],
      phone: faker.phone.number(),
      updatedAt: new Date(),
      id: 'null'
    };
}

export function createRandomOrder(): Order {
    return {
      createdAt: new Date(),
      customer: createRandomCustomer(),
      discount: 0,
      id: 'null',
      product: null,
      quantity: parseInt(faker.random.numeric()),
      totalPrice: parseInt(faker.random.numeric(3)),
      updatedAt: new Date()
    };
}