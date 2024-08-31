import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create.dto';
import { CreateUserUseCase } from './use-cases/create-user';

@Controller('/users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) { }

  @Post()
  async create(@Body() data: CreateUserDTO) {
    try {
      return await this.createUserUseCase.execute(data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
