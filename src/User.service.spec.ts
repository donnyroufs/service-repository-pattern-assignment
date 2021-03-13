// @ts-nocheck
import Database from './Database'

import { UserRepository } from './User.repository'
import { UserService } from './User.service'

describe('User service', () => {
  let userService = new UserService(new UserRepository())

  it('Should have access to the user repository', () => {
    expect(userService.userRepo).toBeDefined()
  })

  it('Should have a method called createUser', () => {
    expect(userService.createUser).toBeDefined()
  })

  it('should call the createUser method on the userRepository when the createUser method on the service gets invoked', async (done) => {
    const spy = jest.spyOn(userService.userRepo, 'createUser')
    await userService.createUser({ username: 'John Doe' })

    expect(spy).toHaveBeenCalled()
    done()
  })

  it('Should return a created user', async (done) => {
    const createdUser = await userService.createUser({ username: 'John Doe' })
    const createdUser2 = await userService.createUser({ username: 'Doe John' })

    expect(createdUser).toEqual({
      id: 1,
      username: 'John Doe',
    })

    expect(createdUser2).toEqual({
      id: 2,
      username: 'Doe John',
    })

    done()
  })

  afterEach(() => {
    Database.clear()
  })
})
