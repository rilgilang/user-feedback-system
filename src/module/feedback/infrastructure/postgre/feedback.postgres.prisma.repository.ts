import { Injectable } from '@nestjs/common';
import { FeedbackRepository } from '../../domain/repositories/feedback.repository.interface';
import { PrismaService } from 'src/common/prisma.service';
import { FeedbackEntity } from '../../domain/entities/feedback.entity';

@Injectable()
export class FeedbackPostgresPrismaRepository implements FeedbackRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<FeedbackEntity[]> {
    const feedbacks = await this.prisma.postgres.feedback.findMany();

    return feedbacks.map(
      (b) =>
        new FeedbackEntity(
          b.id,
          b.user_id,
          b.title,
          b.status,
          b.description,
          b.type,
          b.created_at,
          b.updated_at,
        ),
    );
  }

  async findAllWithQuery(
    sort: string,
    filter: string,
    q: string,
    type: string,
    page: number,
    per_page: number,
  ): Promise<FeedbackEntity[]> {
    const where: any = {};

    if (filter) {
      switch (filter) {
        case 'status':
          where[filter] = q.toUpperCase();
      }
    }

    if (type) {
      where['type'] = type.toUpperCase();
    }

    console.info('where', where);

    const orderDirection: 'asc' | 'desc' =
      sort === 'asc' || sort === 'desc' ? sort : 'desc';

    const feedbacks = await this.prisma.postgres.feedback.findMany({
      where,
      orderBy: { created_at: orderDirection },
      take: per_page,
      skip: (page - 1) * per_page,
    });

    return feedbacks.map(
      (b) =>
        new FeedbackEntity(
          b.id,
          b.user_id,
          b.title,
          b.status,
          b.description,
          b.type,
          b.created_at,
          b.updated_at,
        ),
    );
  }

  async findAllCount(
    sort: string,
    filter: string,
    q: string,
    type: string,
  ): Promise<number> {
    const where: any = {};

    if (filter) {
      switch (filter) {
        case 'status':
          where[filter] = q.toUpperCase();
      }
    }

    if (type) {
      where['type'] = type.toUpperCase();
    }

    const orderDirection: 'asc' | 'desc' =
      sort === 'asc' || sort === 'desc' ? sort : 'desc';

    console.info('order direction ', orderDirection);

    const feedbackCount = await this.prisma.postgres.feedback.findMany({
      where,
      orderBy: { created_at: orderDirection },
    });

    return feedbackCount.length;
  }

  async findById(id: string): Promise<FeedbackEntity | null> {
    const b = await this.prisma.postgres.feedback.findUnique({ where: { id } });
    return b
      ? new FeedbackEntity(
          b.id,
          b.user_id,
          b.title,
          b.status,
          b.description,
          b.type,
          b.created_at,
          b.updated_at,
        )
      : null;
  }

  async create(feedback: FeedbackEntity): Promise<null> {
    await this.prisma.postgres.feedback.create({
      data: {
        id: feedback.id,
        title: feedback.title,
        user_id: feedback.userId,
        status: 'PENDING',
        description: feedback.description,
        type: 'BUG_REPORT',
        created_at: feedback.createdAt,
        updated_at: feedback.updatedAt,
      },
    });
    return null;
  }
}
