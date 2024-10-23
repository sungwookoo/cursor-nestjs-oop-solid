import { Injectable } from '@nestjs/common';
import { Order } from './order2.interface';

@Injectable()
export class Order2Service {
  private orders: Order[] = [];

  // 비즈니스 로직과 데이터 접근 로직이 결합됨
  createOrder(order: Order): Order {
    // 비즈니스 규칙: 주문 금액이 0보다 커야 함
    if (order.amount <= 0) {
      throw new Error('주문 금액은 0보다 커야 합니다');
    }
    // 데이터 접근 로직이 결합됨
    this.orders.push(order); // 직접 데이터 배열에 접근
    return order;
  }

  cancelOrder(orderId: number): void {
    const order = this.orders.find(order => order.id === orderId);
    if (!order) {
      throw new Error('주문을 찾을 수 없습니다');
    }
    // 비즈니스 규칙: 이미 배송된 주문은 취소할 수 없음
    if (order.status === 'shipped') {
      throw new Error('배송된 주문은 취소할 수 없습니다');
    }
    order.status = 'cancelled';
  }

  // 데이터 접근 로직이 결합됨
  getAllOrders(): Order[] {
    return this.orders; // 직접 데이터 배열에 접근
  }
}
