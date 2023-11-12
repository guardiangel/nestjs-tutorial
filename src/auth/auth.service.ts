import { Injectable } from '@nestjs/common';
//import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  test() {
    console.log('test AuthService function');
  }

  signup() {
    return { msg: 'Hello,I have signed up' };
  }

  signin() {
    return 'I am sign in, felix';
  }
}
