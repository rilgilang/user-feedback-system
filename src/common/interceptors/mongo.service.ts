// mongo.provider.ts
import { MongoClient } from 'mongodb';
import { Provider } from '@nestjs/common';

export const MongoProvider: Provider = {
  provide: 'MONGO_CLIENT',
  useFactory: async () => {
    // const uri = process.env.MONGO_URI; // e.g., from Atlas
    const client = new MongoClient('mongodb://:@127.0.0.1');
    await client.connect();
    return client;
  },
};
