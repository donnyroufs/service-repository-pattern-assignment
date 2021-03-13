// @ts-nocheck
import Database from './Database'
import { IUser } from './Database'
import { UserRepository } from './User.repository'

describe('user repository', () => {
  let userRepo: UserRepository = new UserRepository()

  it('should have access to a database connection', () => {
    expect(userRepo.db).toBeDefined()
  })

  it('should have a method called createUser', () => {
    expect(userRepo.createUser).toBeDefined()
  })

  it('should call the create method on the database when invoking the createUser method on userRepository', async (done) => {
    const spy = jest.spyOn(userRepo.db, 'create')
    await userRepo.createUser({ username: 'John Doe' })

    expect(spy).toHaveBeenCalled()
    done()
  })

  it('The createUser method should return a new user', async (done) => {
    expect(await userRepo.createUser({ username: 'John Doe' })).toEqual({
      id: 1,
      username: 'John Doe',
    } as IUser)

    done()
  })

  afterEach(() => {
    Database.clear()
  })
})
