import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

class OrderDto {
  productId: string;
  quantity: number;
}

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Get('get-products')
    getProducts() {
        return this.productsService.getProducts();
    }

    @Post('order')
    orderProduct(@Body() body: OrderDto) {
        const { productId, quantity } = body;
        return this.productsService.orderProduct(productId, quantity);
    }
}
