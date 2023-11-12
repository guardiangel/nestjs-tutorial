import { ForbiddenException, Injectable } from '@nestjs/common';
//import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

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

    try {
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
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
        throw error;
      }
    }
  }

  async signin(dto: AuthDto) {
    //find the user
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    //if use does not exist, throw exception

    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }
    // compare password
    //if password is incorrect, throw exceptio
    const passMatchesFlag = await argon.verify(user.hash, dto.password);

    if (!passMatchesFlag) {
      throw new ForbiddenException('Credential incorrect, password');
    }

    delete user.hash;
    //return user
    return user;
  }
}
