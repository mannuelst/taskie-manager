import {
  CreateUserDTO,
  UserCreatedDTO,
  UsernameAndEmail,
} from '../dto/create.dto';

export abstract class UserRepository {
  abstract findByUsernameOrEmail(
    data: UsernameAndEmail,
  ): Promise<UserCreatedDTO | null>;
  abstract save(data: CreateUserDTO): Promise<UserCreatedDTO>;
  // abstract findByEmail()
}
