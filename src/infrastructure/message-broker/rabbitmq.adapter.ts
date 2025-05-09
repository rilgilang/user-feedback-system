// infrastructure/message-broker/rabbitmq.service.ts
import { Injectable } from '@nestjs/common';
import { connect, Connection, Channel } from 'amqplib';
import { MessageBrokerPort } from 'src/port/message-broker.port';

@Injectable()
export class RabbitMQAdapter implements MessageBrokerPort {
  private connection: Connection;
  private channel: Channel;

  async onModuleInit() {
    this.connection = await connect(
      'amqp://guest:guest@127.0.0.1:5672/aicare-marketplace',
    );
    this.channel = await this.connection.createChannel();

    // Start consuming from queue here
    await this.consume('feedback_queue', (message) => {
      console.log('Received message:', message);
      // you can delegate to a handler/service here
    });
  }

  async onModuleDestroy() {
    await this.channel?.close();
    await this.connection?.close();
  }

  async publish(queue: string, message: Record<string, any>) {
    await this.channel.assertQueue(queue, { durable: true });
    this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  }

  async consume(queue: string, onMessage: (msg: any) => void) {
    await this.channel.assertQueue(queue, { durable: true });
    this.channel.consume(queue, (msg) => {
      if (msg) {
        const content = JSON.parse(msg.content.toString());
        onMessage(content);
        this.channel.ack(msg);
      }
    });
  }
}
