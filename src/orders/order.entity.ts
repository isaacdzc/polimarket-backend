import { Product } from "src/products/product.entity"
import { User } from "src/users/user.entity"

export class Order {
    id: string
    products: Product[]
    client: User
    address: string
    totalPrice: number
    paymentMethod: PaymentMethod
    createdAt: Date
}

export const enum PaymentMethod {
    CREDIT_CARD = 'CREDIT_CARD',
    DEBIT_CARD = 'DEBIT_CARD',
    CASH = 'CASH',
    PAYPAL = 'PAYPAL',
}