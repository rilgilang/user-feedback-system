export const MESSAGE_BROKER_PORT = Symbol('MESSAGE_BROKER_PORT');

export interface MessageBrokerPort {
  publish(queue: string, message: any): Promise<void>;
  consume(queue: string, message: any): Promise<void>;
}
