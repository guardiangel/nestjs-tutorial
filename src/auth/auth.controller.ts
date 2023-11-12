import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  //this means nestjs will automatically create AuthService instance,
  //it's like Dependency Injection in spring framework in java.
  constructor(private authService: AuthService) {
    authService.test();
  }

  //usage: /auth/signup
  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
