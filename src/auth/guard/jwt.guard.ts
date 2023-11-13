import { AuthGuard } from '@nestjs/passport';

export class JwtGuard extends AuthGuard('jwttoken') {
  constructor() {
    super();
  }
}
