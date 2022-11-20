import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Req() req: Request, @Res() res: Response) {
    const newUser = await this.usersService.createUser(req.body);
    return res.status(HttpStatus.OK).json(newUser);
  }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
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
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const updatedUser = await this.usersService.updateUser(+id, req.body.user);
    return res.status(HttpStatus.OK).json(updatedUser);
  }

  @HttpCode(204)
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const deleteUser = await this.usersService.deleteUser(+id);
    return res.status(HttpStatus.OK).json(deleteUser);
  }
}
