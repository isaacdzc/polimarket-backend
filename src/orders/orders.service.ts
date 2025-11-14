import { Injectable } from '@nestjs/common';
import { orders } from './orders.data';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
	async getOrders(): Promise<Order[]> {
		return orders;
	}
}
