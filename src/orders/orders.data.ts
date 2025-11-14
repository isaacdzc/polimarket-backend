import { Order, PaymentMethod } from "./order.entity";
import { products } from "../products/products.data";
import { data as users } from "../users/users.data";
import { Role } from "../users/user.entity";
import { v4 } from 'uuid';

const clients = users.filter((u) => u.role === Role.CLIENT);

export let orders: Array<Order> = [
	{
		id: v4(),
		products: [products[0]],
		client: clients[0] ?? users[10],
		address: (clients[0] ?? users[10]).address,
		totalPrice: products[0].price * 10,
		paymentMethod: PaymentMethod.CASH,
		createdAt: new Date(),
	},
	{
		id: v4(),
		products: [products[1], products[0]],
		client: clients[1] ?? users[11],
		address: (clients[1] ?? users[11]).address,
		totalPrice: products[1].price * 5 + products[0].price * 20,
		paymentMethod: PaymentMethod.CREDIT_CARD,
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
	},
	{
		id: v4(),
		products: [products[2]],
		client: clients[0] ?? users[10],
		address: (clients[0] ?? users[10]).address,
		totalPrice: products[2].price * 3,
		paymentMethod: PaymentMethod.DEBIT_CARD,
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
	},
	{
		id: v4(),
		products: [products[0], products[1], products[2]],
		client: clients[1] ?? users[11],
		address: (clients[1] ?? users[11]).address,
		totalPrice: products[0].price * 2 + products[1].price * 2 + products[2].price * 1,
		paymentMethod: PaymentMethod.PAYPAL,
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72),
	},
	{
		id: v4(),
		products: [products[1]],
		client: clients[0] ?? users[10],
		address: (clients[0] ?? users[10]).address,
		totalPrice: products[1].price * 12,
		paymentMethod: PaymentMethod.CASH,
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 96),
	},
];
