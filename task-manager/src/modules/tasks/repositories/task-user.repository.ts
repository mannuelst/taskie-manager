import { TaskUserRequestDTO, TaskUserResponseDTO } from '../dto/task-user.dto';

export abstract class TaskUserRepository {
  abstract save(data: TaskUserRequestDTO): Promise<TaskUserResponseDTO>;
}
