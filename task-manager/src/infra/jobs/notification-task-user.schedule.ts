import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class NotificationTaskUserSchedule {
  @Cron(CronExpression.EVERY_5_SECONDS) // definindo tempo que essa cron irá executar!
  getAllTasksDay() {
    console.log('Task OK!', new Date());
  }
}

/**
 * jobs: são crons que serão executadas
 */
