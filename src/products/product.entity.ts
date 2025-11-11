export class Product {
    id: string
    name: string
    description: string
    reference: string
    price: number
    stock: number
    imageUrl: string
    unit: Unit
}

export enum Unit {
    UNIT = 'UNIT',
    KILOGRAM = 'KILOGRAM',
    LITER = 'LITER',
    LITER_PER_METER = 'LITER_PER_METER',
    METER = 'METER',
    LIBRA = 'LIBRA',
}
