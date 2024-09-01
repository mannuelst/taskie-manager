import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import {
  CreateUserDTO,
  UserCreatedDTO,
  UsernameAndEmail,
} from '../../dto/create.dto';
import { UserRepository } from '../user.repository';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) { }

  async findByUsernameOrEmail(
    data: UsernameAndEmail,
  ): Promise<UserCreatedDTO | null> {
    return await this.prisma.user.findFirst({
      where: {
        OR: [{ username: data.username }, { email: data.email }],
      },
    });
  }
  async save(data: CreateUserDTO): Promise<UserCreatedDTO> {
    return await this.prisma.user.create({
      data,
    });
  }
}
