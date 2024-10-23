import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { Order } from './order.interface';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  createOrder(order: Order): Order {
    // 비즈니스 규칙: 주문 금액이 0보다 커야 함
    if (order.amount <= 0) {
      throw new Error('주문 금액은 0보다 커야 합니다');
    }
    // 데이터 접근 로직과 분리된 비즈니스 로직
    return this.orderRepository.save(order);
  }

  cancelOrder(orderId: number): void {
    const order = this.orderRepository.findById(orderId);
    if (!order) {
      throw new Error('주문을 찾을 수 없습니다');
    }
    // 비즈니스 규칙: 이미 배송된 주문은 취소할 수 없음
    if (order.status === 'shipped') {
      throw new Error('배송된 주문은 취소할 수 없습니다');
    }
    order.status = 'cancelled';
    // 데이터 접근 로직과 분리된 비즈니스 로직
    this.orderRepository.save(order);
  }
}
