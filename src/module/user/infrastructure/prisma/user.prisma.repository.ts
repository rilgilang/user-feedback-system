import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository.interface';
import { PrismaService } from 'src/common/prisma.service';
import { UserEntity } from '../../domain/entities/user.entity';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<UserEntity[]> {
    const books = await this.prisma.postgres.user.findMany();
    return books.map(
      (b) =>
        new UserEntity(
          b.id,
          b.username,
          b.email,
          b.password,
          b.created_at,
          b.updated_at,
        ),
    );
  }

  async findById(id: string): Promise<UserEntity | null> {
    const b = await this.prisma.postgres.user.findUnique({ where: { id } });
    return b
      ? new UserEntity(
          b.id,
          b.username,
          b.email,
          b.password,
          b.created_at,
          b.updated_at,
        )
      : null;
  }

  //   async create(book: Book): Promise<void> {
  //     await this.prisma.book.create({ data: book });
  //   }

  //   async update(book: Book): Promise<void> {
  //     await this.prisma.book.update({ where: { id: book.id }, data: book });
  //   }

  //   async delete(id: string): Promise<void> {
  //     await this.prisma.book.delete({ where: { id } });
  //   }
}
