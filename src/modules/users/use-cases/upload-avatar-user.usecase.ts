import { Injectable } from '@nestjs/common';
import { Storage } from 'src/infra/providers/storage/storage';
import { AvatarDTO } from '../dto/create.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UploadAvatarUserUseCase {
  constructor(
    private storage: Storage,
    private userRepository: UserRepository,
  ) { }
  async execute(data: AvatarDTO) {
    const file = await this.storage.upload(data.file, 'avatar');
    console.log(file);
    return file;
  }
}
