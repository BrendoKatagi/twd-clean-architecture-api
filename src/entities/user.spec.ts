import { left } from '../shared/either'
import { User } from './user'
import { InvalidEmailError } from './errors/invalid-email-error'

describe('User domain class', () => {
  test('should not create user with invalid e-mail address', () => {
    const invalidEmail = 'invalid_email'
    const error = User.create({ name: 'any-name', email: invalidEmail })
    expect(error).toEqual(left(new InvalidEmailError()))
  })
})