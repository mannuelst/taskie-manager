import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/infra/providers/auth-guard.provider';
import { CreateTaskUserSchemaDTO } from './schema/task-user.schema';
import { CreateTaskUserUseCase } from './use-cases/create-task-user.usecase';
@Controller('/tasks')
export class TaskUserController {
  constructor(private taskUserUseCase: CreateTaskUserUseCase) { }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() data: CreateTaskUserSchemaDTO, @Request() req) {
    return this.taskUserUseCase.execute({
      ...data,
      userId: req.user.sub,
    });
  }
}
