import { RegisterUserController } from '@/web-controllers'
import { RegisterUserOnMainlingList } from '@/usecases/register-user-on-mainling-list/'
import { InMemoryUserRepository } from '@test/usecases/register-user-on-mailing-list/repository'

export const makeRegisterUserController = (): RegisterUserController => {
  const inMemoryUserRepository = new InMemoryUserRepository([])
  const registerUserOnMainlingListUseCase = new RegisterUserOnMainlingList(inMemoryUserRepository)
  const registerUserController = new RegisterUserController(registerUserOnMainlingListUseCase)
  return registerUserController
}