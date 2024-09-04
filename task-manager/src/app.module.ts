import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { ScheduleTaskModule } from './infra/jobs/schedule-task.module';
import { LoginModule } from './modules/login/login.module';
import { NotificationModule } from './modules/notification/notification.module';
import { TaskUserModule } from './modules/tasks/task-user.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    UserModule,
    LoginModule,
    NotificationModule,
    ScheduleTaskModule,
    TaskUserModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule { }
