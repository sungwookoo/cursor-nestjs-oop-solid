import { Injectable } from '@nestjs/common';
import { Order } from './order3.interface';
import { Order3RepositoryInterface } from './order3.repository.interface';

@Injectable()
export class Order3Repository implements Order3RepositoryInterface {
  private orders: Order[] = [];

  // SRP 적용: 데이터 접근 로직만을 담당
  save(order: Order): Order {
    this.orders.push(order);
    return order;
  }

  // SRP 적용: 데이터 접근 로직만을 담당
  findById(orderId: number): Order | undefined {
    return this.orders.find((order) => order.id === orderId);
  }

  // SRP 적용: 데이터 접근 로직만을 담당
  getAllOrders(): Order[] {
    return this.orders;
  }
}
