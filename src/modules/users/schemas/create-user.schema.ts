import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const CreateUserSchema = z.object({
  name: z.string(),
  password: z.string(),
  username: z.string(),
  email: z.string().email(),
});

export class CreateUserSchemaDT0 extends createZodDto(CreateUserSchema) { }

export const CreateUserResponseSchemaDTO = CreateUserSchema.omit({
  password: true,
});
export type CreateUserResponseSchemaDTO = z.infer<
  typeof CreateUserResponseSchemaDTO
>;
