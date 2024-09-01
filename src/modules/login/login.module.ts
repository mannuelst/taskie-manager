import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/infra/database/prisma.service';

import { LoginController } from './login.controller';
import { SignInUseCase } from './use-cases/sign-in';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'sfzfvrtc4566wtw45',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [LoginController],
  providers: [
    PrismaService,
    SignInUseCase,
    // {
    //   provide: UserRepository,
    //   useClass: UserPrismaRepository,
    // },
  ],
})
export class LoginModule { }
