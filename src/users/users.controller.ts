import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { UserType } from './types/user.type';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Res() res: Response, @Body() body: UserType) {
    const newUser = await this.usersService.createUser(body);
    return res.status(HttpStatus.OK).json(newUser);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const allUsers = await this.usersService.findAll();
    return res.status(HttpStatus.OK).json(allUsers);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const findSingleUser = await this.usersService.findOne(+id);
    return res.status(HttpStatus.OK).json(findSingleUser);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Res() res: Response,
    @Body() body: UserType,
  ) {
    const updatedUser = await this.usersService.updateUser(+id, body);
    return res.status(HttpStatus.OK).json(updatedUser);
  }

  @HttpCode(204)
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const deleteUser = await this.usersService.deleteUser(+id);
    return res.status(HttpStatus.OK).json(deleteUser);
  }
}
