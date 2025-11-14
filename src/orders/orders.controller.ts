import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@Get('get-orders')
	getOrders() {
		return this.ordersService.getOrders();
	}

	@Get('detail/:id')
	getOrderDetail(@Param('id') id: string) {
		return this.ordersService.getOrderById(id);
	}
}
