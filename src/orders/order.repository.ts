import { Injectable } from '@nestjs/common';
import { Order } from './order.interface';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  // 데이터 접근 로직: 주문 저장
  save(order: Order): Order {
    this.orders.push(order);
    return order;
  }

  // 데이터 접근 로직: 주문 ID로 조회
  findById(orderId: number): Order | undefined {
    return this.orders.find(order => order.id === orderId);
  }
}
