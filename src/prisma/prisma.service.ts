import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

//used for connecting to database here
@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          //url: 'postgresql://postgres:123@localhost:5434/nest?schema=public',
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }
}
