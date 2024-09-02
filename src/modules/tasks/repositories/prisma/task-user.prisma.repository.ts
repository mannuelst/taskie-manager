import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import {
  TaskUserRequestDTO,
  TaskUserResponseDTO,
} from '../../dto/task-user.dto';
import { TaskUserRepository } from '../task-user.repository';

@Injectable()
export class TaskUserPrismaRepository implements TaskUserRepository {
  constructor(private prisma: PrismaService) { }
  async save(data: TaskUserRequestDTO): Promise<TaskUserResponseDTO> {
    const { description, endAt, startAt, title, priority, status, userId } =
      data;
    return this.prisma.taskUser.create({
      data: {
        task: {
          create: {
            description,
            endAt,
            startAt,
            title,
            priority,
            status,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
}
