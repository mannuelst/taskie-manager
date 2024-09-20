import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('/notification')
export class NotificationController {
  // pode ser adicionado na camada de service, Inject vai verificar se existe um "NOTIFICATION" e criar uma instance
  constructor(
    @Inject('NOTIFICATION') private readonly notificationClient: ClientProxy,
  ) { }
  @Get('/send-notification')
  testNotification() {
    this.notificationClient.emit('task_notification', 'Olá');
  }
}
