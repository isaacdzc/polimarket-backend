import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { products } from './products.data';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {

    async getProducts(): Promise<Product[]> {
        return products;
    }

    async orderProduct(productId: string, quantity: number): Promise<Product> {
        if (!productId) {
            throw new BadRequestException('productId is required');
        }

        const qty = Number(quantity);
        if (!Number.isInteger(qty) || qty <= 0) {
            throw new BadRequestException('quantity must be a positive integer');
        }

        const product = products.find((p) => p.id === productId);
        if (!product) {
            throw new NotFoundException(`Product with id ${productId} not found`);
        }

        if (product.stock < qty) {
            throw new BadRequestException(`Requested quantity (${qty}) exceeds stock (${product.stock})`);
        }

        product.stock = product.stock - qty;
        return product;
    }
}
