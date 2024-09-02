import { Injectable } from '@nestjs/common';
import { TaskUserRequestDTO } from '../dto/task-user.dto';
import { TaskUserRepository } from '../repositories/task-user.repository';
@Injectable()
export class CreateTaskUserUseCase {
  constructor(private taskUserRepository: TaskUserRepository) { }
  async execute(data: TaskUserRequestDTO) {
    return this.taskUserRepository.save(data);
  }
}
