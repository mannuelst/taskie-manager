import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/infra/providers/auth-guard.provider';
import {
  CreateUserResponseSchemaDTO,
  CreateUserSchemaDT0,
} from './schemas/create-user.schema';
import { CreateUserUseCase } from './use-cases/create-user';
import { ProfileUserUseCase } from './use-cases/profile-user.usecase';

@Controller('/users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly profileUserUseCase: ProfileUserUseCase,
  ) { }

  @Post()
  async create(@Body() data: CreateUserSchemaDT0) {
    const user = await this.createUserUseCase.execute(data);
    return CreateUserResponseSchemaDTO.parse(user);
  }
  // @UsePipes(new CreateUserValidationPipe())
  // async create(@Body() data: CreateUserDTO) {
  //   return await this.createUserUseCase.execute(data);
  // }

  @Get('/profile')
  @UseGuards(AuthGuard)
  async profile(@Request() req) {
    console.log('sub', typeof req.user.sub);
    this.profileUserUseCase.execute(req.user.sub);
  }
}
