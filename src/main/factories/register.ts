import { RegisterUserController } from '@/web-controllers'
import { RegisterUserOnMainlingList } from '@/usecases/register-user-on-mainling-list/'
import { MongodbUserRepository } from '@/external/repositories/mongodb'

export const makeRegisterUserController = (): RegisterUserController => {
  const mongoDbUserRepository = new MongodbUserRepository()
  const registerUserOnMainlingListUseCase = new RegisterUserOnMainlingList(mongoDbUserRepository)
  const registerUserController = new RegisterUserController(registerUserOnMainlingListUseCase)
  return registerUserController
}
