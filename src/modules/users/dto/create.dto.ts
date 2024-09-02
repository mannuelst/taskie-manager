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

export type SignInDTO = Pick<CreateUserDTO, 'password' | 'username'>;

export type FileDTO = {
  fieldname: string;
  originlname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
};
