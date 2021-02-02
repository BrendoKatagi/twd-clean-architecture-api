import { HttpRequest, HttpResponse } from '@/web-controllers/ports'
import { RegisterUserOnMainlingList } from '@/usecases/register-user-on-mainling-list'
import { UserData } from '@/entities'
import { UserRepository } from '@/usecases/register-user-on-mainling-list/ports'
import { InMemoryUserRepository } from '@test/usecases/register-user-on-mailing-list/repository'
import { RegisterUserController } from '../../src/web-controllers/register-user-controller'

describe('Register user web controller', () => {
  test('should return status code 201 when request contains valid user data', async () => {
    const request: HttpRequest = {
      body: {
        name: 'Any name',
        email: 'any@email.com'
      }
    }
    const users: UserData[] = []
    const repo: UserRepository = new InMemoryUserRepository(users)
    const usecase: RegisterUserOnMainlingList = new RegisterUserOnMainlingList(repo)
    const controller: RegisterUserController = new RegisterUserController(usecase)
    const response: HttpResponse = await controller.handle(request)
    expect(response.statusCode).toEqual(201)
    expect(response.body).toEqual(request.body)
  })
})
