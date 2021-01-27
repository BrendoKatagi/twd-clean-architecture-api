import { InvalidEmailError, InvalidNameError } from '@/entities/errors'
import { User, UserData } from '@/entities'
import { Either, left, right } from '@/shared'
import { UserRepository } from '@/usecases/register-user-on-mainling-list/ports'

export class RegisterUserOnMainlingList {
  private readonly userRepo: UserRepository

  constructor (userRepo: UserRepository) {
    this.userRepo = userRepo
  }

  public async registerUserOnMainlingList (request: UserData):
    Promise<Either<InvalidNameError | InvalidEmailError, UserData>> {
    const userOrError: Either<InvalidNameError | InvalidEmailError, User> = User.create(request)
    if (userOrError.isLeft()) {
      return left(userOrError.value)
    }

    if (!(await this.userRepo.exists(request))) {
      await this.userRepo.add(request)
    }
    return right(request)
  }
}
