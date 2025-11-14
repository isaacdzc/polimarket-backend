import { Injectable, NotFoundException } from '@nestjs/common';
import { orders } from './orders.data';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
	async getOrders(): Promise<Order[]> {
		return orders;
	}

	async getOrderById(id: string): Promise<Order> {
		const order = orders.find((o) => o.id === id);
		if (!order) {
			throw new NotFoundException(`Order with id ${id} not found`);
		}
		return order;
	}
}
