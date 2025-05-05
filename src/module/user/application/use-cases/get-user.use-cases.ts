import { UserEntity } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository.interface';
import { CreateUserDto } from '../dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';

export class GetUserUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(): Promise<void> {
    await this.userRepo.findAll();
  }
}
