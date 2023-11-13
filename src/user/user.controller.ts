import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
  // GET /users/me
  @UseGuards(AuthGuard('jwttoken'))
  @Get('me')
  getMe() {
    return 'User info:';
  }
}
