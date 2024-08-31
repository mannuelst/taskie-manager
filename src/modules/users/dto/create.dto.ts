export type CreateUserDTO = {
  username: string;
  password: string;
  email: string;
  name: string;
};

export type UsernameAndEmail = Pick<CreateUserDTO, 'email' | 'username'>;

export type UserCreatedDTO = CreateUserDTO & {
  id: string;
  createdAt: Date;
};
