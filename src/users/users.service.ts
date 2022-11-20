import { Injectable } from '@nestjs/common';
import { UserType } from './types/user.type';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepo: Repository<UserType>,
  ) {}

  async createUser(createUser: UserType) {
    const newUser = this.userRepo.create(createUser);
    return await this.userRepo.save(newUser);
  }

  async findAll() {
    return await this.userRepo.find();
  }

  async findOne(id: number) {
    return await this.userRepo.findOneBy({ id: id });
  }

  async updateUser(id: number, updatedUser: UserType) {
    const updateResult = await this.userRepo.update(id, updatedUser);
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Users, id);
    }
    return this.userRepo.findOneBy({ id: id });
  }

  async deleteUser(id: number) {
    const deleteResult = await this.userRepo.delete(id);
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Users, id);
    }
    return deleteResult;
  }
}
