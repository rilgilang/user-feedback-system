import { UserEntity } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository.interface';
import { CreateUserDto } from '../dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';

export class CreateUserUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(input: CreateUserDto): Promise<void> {
    const user = new UserEntity(
      uuidv4().toString(),
      input.username,
      input.email,
      input.password,
      new Date(),
      new Date(),
    );
    await this.userRepo.findAll();
  }
}
