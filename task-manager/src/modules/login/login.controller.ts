import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO } from '../users/dto/create.dto';
import { SignInUseCase } from './use-cases/sign-in';

@Controller()
export class LoginController {
  constructor(private signInUseCase: SignInUseCase) { }

  @Post('/signIn')
  async signIn(@Body() signinDTO: SignInDTO) {
    const token = await this.signInUseCase.execute(signinDTO);
    return token;
  }
}
