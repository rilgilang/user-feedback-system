import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

// ✅ Make sure these import paths are correct — they usually come from:
//    prisma/generated/mongo-client and prisma/generated/postgres-client
import { PrismaClient as PrismaPostgresClient } from 'prisma/generated/prisma/postgres';

@Injectable()
export class PrismaService implements OnModuleInit {
  public readonly postgres: PrismaPostgresClient;

  constructor(
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger,
  ) {
    this.postgres = new PrismaPostgresClient();
  }

  async onModuleInit() {
    await this.postgres.$connect();

    (this.postgres.$on as any)('info', (e: any) => {
      this.logger.info(`[Postgres] ${e.message || JSON.stringify(e)}`);
    });

    (this.postgres.$on as any)('warn', (e: any) => {
      this.logger.warn(`[Postgres] ${e.message || JSON.stringify(e)}`);
    });

    (this.postgres.$on as any)('error', (e: any) => {
      this.logger.error(`[Postgres] ${e.message || JSON.stringify(e)}`);
    });

    (this.postgres.$on as any)('query', (e: any) => {
      this.logger.info(`[Postgres Query] ${e.message || JSON.stringify(e)}`);
    });
  }
}
