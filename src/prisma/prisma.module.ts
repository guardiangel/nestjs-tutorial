import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

//use exports for other modules, otherwise, we get the error like below:
//Nest can't resolve dependencies of the AuthService (?).
//Please make sure that the argument PrismaService at index [0] is available in the AuthModule context.
//Global() means we can use it from every other modules without explicitly import the module
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
