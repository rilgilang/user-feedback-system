import { Module } from '@nestjs/common';
import { UserController } from './interface/controller/user.controller';
import { UserPrismaRepository } from './infrastructure/postgres/user.postgres.prisma.repository';

@Module({
  controllers: [UserController],
  providers: [UserPrismaRepository],
  exports: [UserPrismaRepository],
})
export class UserModule {}
