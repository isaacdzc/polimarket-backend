import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { data } from './users.data';
import { User, Role } from './user.entity';

@Injectable()
export class UsersService {
	async getUsers(): Promise<User[]> {
		return data;
	}

	async authorizeUser(id: string): Promise<User> {
		const user = data.find((u) => u.id === id);
		if (!user) {
			throw new NotFoundException(`User with id ${id} not found`);
		}

		if (user.role !== Role.SALES) {
			throw new BadRequestException('Only users with role SALES can be authorized');
		}

		if (user.authorized) {
			throw new ConflictException('User is already authorized');
		}

		user.authorized = true;
		return user;
	}

		async getSalesman(): Promise<User[]> {
			return data.filter((u) => u.role === Role.SALES);
		}
}
