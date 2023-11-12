import { Injectable } from '@nestjs/common';
//import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  test() {
    console.log('test AuthService function');
  }

  async signup(dto: AuthDto) {
    //generate the encrypted password
    const hash = await argon.hash(dto.password);
    //save the data to database
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash: hash,
      },
      // select: {
      //   id: true,
      //   email: true,
      //   createAt: true,
      // },
    });
    delete user.hash;
    //return saved user
    return user;
  }

  signin() {
    return 'I am sign in, felix';
  }
}
