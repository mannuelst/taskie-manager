import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) { }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFound(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      //   console.log('TOKEN', token);
      const payload = await this.jwtService.verifyAsync(token, {
        secret: 'ZELVY',
      });

      console.log('PAYLOAD: ', payload);
      request['user'] = payload;
    } catch (error) {
      //  console.log(error);
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFound(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
