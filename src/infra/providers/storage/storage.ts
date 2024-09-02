import { FileDTO } from 'src/modules/users/dto/create.dto';

export abstract class Storage {
  abstract upload(file: FileDTO, folder: string): Promise<any>;
}
