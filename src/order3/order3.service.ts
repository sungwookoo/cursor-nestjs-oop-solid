import { Injectable } from '@nestjs/common';
import { Order } from './order3.interface';
import { Order3RepositoryInterface } from './order3.repository.interface';

@Injectable()
export class Order3Service {
  constructor(private readonly orderRepository: Order3RepositoryInterface) {}

  // SRP 적용: 비즈니스 로직만을 담당
  createOrder(order: Order): Order {
    if (order.amount <= 0) {
      throw new Error('주문 금액은 0보다 커야 합니다');
    }
    return this.orderRepository.save(order); // 데이터 접근 로직은 리포지토리에 위임
  }

  // SRP 적용: 비즈니스 로직만을 담당
  cancelOrder(orderId: number): void {
    const order = this.orderRepository.findById(orderId);
    if (!order) {
      throw new Error('주문을 찾을 수 없습니다');
    }
    if (order.status === 'shipped') {
      throw new Error('배송된 주문은 취소할 수 없습니다');
    }
    order.status = 'cancelled';
    this.orderRepository.save(order); // 데이터 접근 로직은 리포지토리에 위임
  }

  // SRP 적용: 비즈니스 로직만을 담당
  getAllOrders(): Order[] {
    return this.orderRepository.getAllOrders(); // 데이터 접근 로직은 리포지토리에 위임
  }
}
