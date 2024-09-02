import {
  CreateUserDTO,
  UserCreatedDTO,
  UsernameAndEmail,
} from '../dto/create.dto';

export abstract class UserRepository {
  abstract findByUsernameOrEmail(
    data: UsernameAndEmail,
  ): Promise<UserCreatedDTO | null>;
  abstract save(data: CreateUserDTO): Promise<UserCreatedDTO | null>;
  abstract findByUsername(username: string): Promise<UserCreatedDTO | null>;
  abstract findById(id: string): Promise<UserCreatedDTO | null>;
  abstract uploadAvatar(id: string, path: string): Promise<void>;
}
