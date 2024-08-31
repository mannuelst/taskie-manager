import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDTO } from '../dto/create.dto';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute(data: CreateUserDTO) {
    const { password, username, email } = data;

    //CHECK: user already exists
    const user = await this.userRepository.findByUsernameOrEmail({
      email,
      username,
    });

    if (user) {
      throw new HttpException('User already exists!', HttpStatus.BAD_REQUEST);
    }

    const _pw = await hash(password, 10); ///hash
    return await this.userRepository.save({
      ...data,
      password: _pw,
    });
  }
}
