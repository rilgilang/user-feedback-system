import { Controller, Get } from '@nestjs/common';
import { UserPrismaRepository } from '../../infrastructure/postgres/user.postgres.prisma.repository';

@Controller('user')
export class UserController {
  constructor(private readonly userRepo: UserPrismaRepository) {}

  @Get()
  async findAll() {
    return await this.userRepo.findAll();
  }
}
