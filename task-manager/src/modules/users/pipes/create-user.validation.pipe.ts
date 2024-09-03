import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDTO } from '../dto/create.dto';

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
  transform(
    { name, username, password, email }: CreateUserDTO,
    metadata: ArgumentMetadata,
  ) {
    if (!name || !email || !username || !password) {
      throw new HttpException(
        'All fields are required!',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    return { name, email, password, username };
  }
}
