import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { CreateUserDTO } from './dto/create.dto';
import { CreateUserValidationPipe } from './pipes/create-user.validation.pipe';
import { CreateUserUseCase } from './use-cases/create-user';

@Controller('/users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) { }

  @Post()
  @UsePipes(new CreateUserValidationPipe())
  async create(@Body() data: CreateUserDTO) {
    return await this.createUserUseCase.execute(data);
  }
}
