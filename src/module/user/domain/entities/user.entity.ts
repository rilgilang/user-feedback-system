export class UserEntity {
  constructor(
    public readonly id: string,
    public username: string,
    public email: string,
    public password: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
