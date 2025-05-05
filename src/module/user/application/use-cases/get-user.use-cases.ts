import { UserRepository } from '../../domain/repositories/user.repository.interface';

export class GetUserUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(): Promise<void> {
    await this.userRepo.findAll();
  }
}
