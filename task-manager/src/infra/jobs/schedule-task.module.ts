import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationTaskUserSchedule } from './notification-task-user.schedule';

@Module({
  providers: [NotificationTaskUserSchedule],
  imports: [ScheduleModule.forRoot()],
})
export class ScheduleTaskModule { }
