import { Product, Unit } from "./product.entity";
import { v4 } from 'uuid';

export let products: Array<Product> = [
	{
		id: v4(),
		name: 'Ladrillo común',
		description: 'Ladrillo cerámico rojo para construcción general.',
        reference: 'LC-001',
		price: 0.45,
		stock: 1000,
		imageUrl: '',
		unit: Unit.UNIT,
	},
	{
		id: v4(),
		name: 'Ladrillo perforado',
		description: 'Ladrillo perforado para muros interiores y tabiques.',
        reference: 'LP-002',
		price: 0.55,
		stock: 750,
		imageUrl: '',
		unit: Unit.UNIT,
	},
	{
		id: v4(),
		name: 'Ladrillo refractario',
		description: 'Ladrillo refractario para altas temperaturas (hornos, chimeneas).',
        reference: 'LR-003',
		price: 1.25,
		stock: 200,
		imageUrl: '',
		unit: Unit.UNIT,
	},
];