import { Controller, Get } from '@nestjs/common';
import { UserPrismaRepository } from '../../infrastructure/prisma/user.prisma.repository';

@Controller('user')
export class UserController {
  constructor(private readonly userRepo: UserPrismaRepository) {}

  @Get()
  async findAll() {
    return await this.userRepo.findAll();
  }
}
