import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { UserPrismaRepository } from './repository/prisma/user.prisma.repository';
import { UserRepository } from './repository/user.repository';
import { CreateUserUseCase } from './use-cases/create-user';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    PrismaService,
    {
      provide: UserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class UserModule { }

/**
 *
 * When use use abstract class:
 * {
      provide: UserRepository,
      useClass: UserPrismaRepository,
    },
 */
