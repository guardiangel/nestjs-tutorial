import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  // GET /users/me
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Get('meById')
  getMeById(@GetUser('id') userId: number) {
    return userId;
  }
}
