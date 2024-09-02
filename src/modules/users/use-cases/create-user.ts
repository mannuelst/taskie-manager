import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDTO } from '../dto/create.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class CreateUserUseCase {
  private readonly logger = new Logger(CreateUserUseCase.name);
  constructor(private userRepository: UserRepository) { }

  async execute(data: CreateUserDTO) {
    const { password, username, email } = data;

    //CHECK: user already exists
    const user = await this.userRepository.findByUsernameOrEmail({
      email,
      username,
    });

    if (user) {
      this.logger.error(`User ${data.username} already existis...`, data);
      throw new HttpException('User already exists!', HttpStatus.BAD_REQUEST);
    }

    const _pw = await hash(password, 10); ///hash
    return await this.userRepository.save({
      ...data,
      password: _pw,
    });
  }
}
