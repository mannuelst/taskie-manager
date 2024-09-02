import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/infra/database/prisma.service';

import { UserPrismaRepository } from '../users/repositories/prisma/user.prisma.repository';
import { UserRepository } from '../users/repositories/user.repository';
import { LoginController } from './login.controller';
import { SignInUseCase } from './use-cases/sign-in';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'ZELVY',
      signOptions: { expiresIn: '300s' },
    }),
  ],
  controllers: [LoginController],
  providers: [
    PrismaService,
    SignInUseCase,
    {
      provide: UserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class LoginModule { }
