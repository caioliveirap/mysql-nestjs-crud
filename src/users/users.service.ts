import { Injectable } from '@nestjs/common';
import { UserType } from './types/user.type';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepo: Repository<UserType>,
  ) {}

  createUser(createUser: UserType) {
    const newUser = this.userRepo.create(createUser);
    console.log(newUser);

    return newUser;
  }

  async findAll() {}

  async findOne(id: Number) {}

  async updateUser(id: Number, user: UserType) {}

  async deleteUser(id: Number) {}
}
