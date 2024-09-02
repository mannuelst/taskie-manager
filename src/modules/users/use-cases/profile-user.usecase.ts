import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
@Injectable()
export class ProfileUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute(id: string) {
    return this.userRepository.findById(id);
  }
}
