import { Injectable } from '@nestjs/common';
import { Order } from './order.interface';

@Injectable()
export class DiscountService {
  // 비즈니스 로직: 주문에 대한 할인 적용
  applyDiscount(order: Order): Order {
    // 비즈니스 규칙: 주문 금액이 100 이상일 때 10% 할인
    if (order.amount >= 100) {
      order.amount *= 0.9;
    }
    return order;
  }
}
