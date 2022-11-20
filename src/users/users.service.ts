import { Injectable } from '@nestjs/common';
import { UserType } from './types/user.type';
@Injectable()
export class UsersService {
  async createUser(createUser: UserType) {}

  async findAll() {}

  async findOne(id: Number) {}

  async updateUser(id: Number, user: UserType) {}

  async deleteUser(id: Number) {}
}
