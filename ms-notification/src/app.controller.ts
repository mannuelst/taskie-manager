import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // eventPattern (para vários ouvintes), messagePattern para um único ouvinte ou remetente
  @EventPattern('task_notification')
  taskNotification(data: any) {
    console.log('Recebendo mensagem');
    console.log(data);
  }
}
