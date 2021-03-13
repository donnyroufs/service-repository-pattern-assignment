import { UserController } from './User.controller'

class MockedUserService {
  public readonly userRepo: any
  async createUser(data: any) {
    return data
  }
}

describe('User Controller', () => {
  let userController = new UserController(new MockedUserService())

  it('Should have a method called Store', () => {
    expect(userController.store).toBeDefined()
  })

  it('Should make a call to userService.createUser', async (done) => {
    const spy = jest.spyOn(userController.userService, 'createUser')
    await userController.store({ username: 'John Doe' })

    expect(spy).toHaveBeenCalled()
    done()
  })

  it('Should return a user with the name John Doe', async (done) => {
    const result = await userController.store({ username: 'John Doe' })

    expect(result.username).toBe('John Doe')
    done()
  })
})
