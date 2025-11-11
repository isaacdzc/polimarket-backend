import { Controller, Get, Patch, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('get-users')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Patch('authorize/:id')
  authorizeUser(@Param('id') id: string) {
    return this.usersService.authorizeUser(id);
  }

  @Get('salesman')
  getSalesman() {
    return this.usersService.getSalesman();
  }
}
