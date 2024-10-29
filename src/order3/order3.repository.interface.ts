import { Order } from './order3.interface';

// OCP 적용: 인터페이스를 통해 데이터 접근 로직을 추상화
export interface Order3RepositoryInterface {
  save(order: Order): Order;
  findById(orderId: number): Order | undefined;
  getAllOrders(): Order[];
}
