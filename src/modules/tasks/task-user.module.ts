import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { TaskUserPrismaRepository } from './repositories/prisma/task-user.prisma.repository';
import { TaskUserRepository } from './repositories/task-user.repository';
import { TaskUserController } from './task-user.controller';
import { CreateTaskUserUseCase } from './use-cases/create-task-user.usecase';

@Module({
  controllers: [TaskUserController],
  providers: [
    PrismaService,
    CreateTaskUserUseCase,
    {
      provide: TaskUserRepository,
      useClass: TaskUserPrismaRepository,
    },
  ],
})
export class TaskUserModule { }
