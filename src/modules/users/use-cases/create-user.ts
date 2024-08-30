import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { CreateUserDTO } from '../dto/create.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(private prisma: PrismaService) { }

  async execute(data: CreateUserDTO) {
    const { username, email } = data;

    //CHECK: user already exists
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ username: username }, { email: email }],
      },
    });

    if (user) {
      throw new Error('User already exists!');
    }
    return await this.prisma.user.create({ data });
  }
}
