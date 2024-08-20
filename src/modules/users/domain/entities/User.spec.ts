import { User } from './User';
import { UserModel } from '../models/user.model';

const makeSut = () => {
  return new User({
    name: 'any_name',
    email: 'any_email',
    password: 'any_password',
  } as UserModel.toCreate);
};

describe('Unit test UserEntity', () => {
  const sut = makeSut();

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });
});
