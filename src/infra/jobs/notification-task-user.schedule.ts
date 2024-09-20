import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TaskUserRepository } from 'src/modules/tasks/repositories/task-user.repository';

@Injectable()
export class NotificationTaskUserSchedule {
  constructor(private taskRepository: TaskUserRepository) { }
  @Cron(CronExpression.EVERY_5_SECONDS) // definindo tempo que essa cron irá executar!
  async getAllTasksDay() {
    const allTasks = await this.taskRepository.findAllStartDay();
    console.log(allTasks);
  }
}

/**
 * jobs: são crons que serão executadas
 */
