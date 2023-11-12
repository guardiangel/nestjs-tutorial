import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  //this means nestjs will automatically create AuthService instance,
  //it's like Dependency Injection in spring framework in java.
  constructor(private authService: AuthService) {
    authService.test();
  }

  //usage: /auth/signup
  //use @Body() instead of @Req(), the reason is @Req comes from express.js
  //if we transfer the code to other framework, the @Req will probably not be available.
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log({ dto });
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
