import { UserData } from '@/entities'
import { RegisterUserOnMainlingList } from '@/usecases/register-user-on-mainling-list'
import { HttpRequest, HttpResponse } from '@/web-controllers/ports'
import { created } from '@/web-controllers/util'

export class RegisterUserController {
  private readonly usecase: RegisterUserOnMainlingList

  constructor (usecase: RegisterUserOnMainlingList) {
    this.usecase = usecase
  }

  public async handle (request: HttpRequest): Promise<HttpResponse> {
    const userData: UserData = request.body
    const response = await this.usecase.registerUserOnMainlingList(userData)

    if (response.isRight()) {
      return created(response.value)
    }
  }
}
