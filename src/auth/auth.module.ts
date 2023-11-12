import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

//we use @Global() in PrismaModule, so we don't need to use imports: [PrismaModule],
@Module({
  //imports: [PrismaModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
