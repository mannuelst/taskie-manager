import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { Storage } from 'src/infra/providers/storage/storage';
import { SupabaseStorage } from 'src/infra/providers/storage/supabase.storage';
import { UserPrismaRepository } from './repositories/prisma/user.prisma.repository';
import { UserRepository } from './repositories/user.repository';
import { CreateUserUseCase } from './use-cases/create-user';
import { ProfileUserUseCase } from './use-cases/profile-user.usecase';
import { UploadAvatarUserUseCase } from './use-cases/upload-avatar-user.usecase';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    UploadAvatarUserUseCase,
    ProfileUserUseCase,
    PrismaService,
    {
      provide: UserRepository,
      useClass: UserPrismaRepository,
    },
    {
      provide: Storage,
      useClass: SupabaseStorage,
    },
  ],
})
export class UserModule { }

/**
 *
 * When use use abstract class:
 * {
      provide: UserRepository,
      useClass: UserPrismaRepository,
    },
 */
