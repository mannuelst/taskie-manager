import { Test } from '@nestjs/testing';
import { it } from 'node:test';
import { CreateUserDTO } from '../../dto/create.dto';
import { UserRepository } from '../../repositories/user.repository';
import { CreateUserUseCase } from './../create-user.usecase';

describe('CreateUserUseCase', () => {
  let createUserUseCase: CreateUserUseCase;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CreateUserUseCase,
        {
          provide: UserRepository,
          useValue: {
            findByUsernameOrEmail: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    createUserUseCase = moduleRef.get<CreateUserUseCase>(CreateUserUseCase);
  });

  it('Should be possible create a new user', async () => {
    const data: CreateUserDTO = {
      email: 'email@test.com',
      name: 'Name teste',
      password: '1234',
      username: 'username_test',
    };
    const result = await createUserUseCase.execute(data);
  });
});
