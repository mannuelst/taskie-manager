import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { CreateUserUseCase } from './use-cases/create-user';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserUseCase, PrismaService],
})
export class UserModule { }
