import { Injectable } from '@nestjs/common';

type User = {
  name: string;
  email: string;
  linkedin_url: string;
};

@Injectable()
export class UsersService {
  async createUser(createUser: User) {}

  async findAll() {}

  async findOne(id: Number) {}

  async updateUser(id: Number, user: User) {}

  async deleteUser(id: Number) {}
}
