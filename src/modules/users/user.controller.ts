import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create.dto';
import { CreateUserUseCase } from './use-cases/create-user';

@Controller('/users')
export class UserControler {
  constructor(private readonly createUserUseCase: CreateUserUseCase) { }

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return await this.createUserUseCase.execute(data);
  }
}
