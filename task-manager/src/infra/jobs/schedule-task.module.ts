import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskUserRepository } from 'src/modules/tasks/repositories/task-user.repository';
import { TaskUserPrismaRepository } from './../../modules/tasks/repositories/prisma/task-user.prisma.repository';
import { NotificationTaskUserSchedule } from './notification-task-user.schedule';

@Module({
  providers: [
    NotificationTaskUserSchedule,
    {
      provide: TaskUserRepository,
      useClass: TaskUserPrismaRepository,
    },
  ],
  imports: [ScheduleModule.forRoot()],
})
export class ScheduleTaskModule { }
