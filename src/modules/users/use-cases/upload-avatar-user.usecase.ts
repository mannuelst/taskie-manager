import { Injectable } from '@nestjs/common';
import { extname } from 'path';
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
    const exFile = extname(data.file.originalname);
    const transformName = `${data.idUser}${exFile}`;
    /*
    originalname = avatar.png
    originalname= transformName(dnfisuh83.pmh)
     */
    data.file.originalname = transformName;
    const file = await this.storage.upload(data.file, 'avatar');
    const pathAvatarUser = `avatar/${data.file.originalname}`;
    await this.userRepository.uploadAvatar(data.idUser, pathAvatarUser);
    return file;
  }
}
