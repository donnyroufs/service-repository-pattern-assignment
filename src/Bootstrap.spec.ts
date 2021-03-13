// @ts-nocheck
import { userController } from './Bootstrap'

describe('Bootstrap User Module', () => {
  it('should create a user and return the full user', async (done) => {
    const result = await userController.store({ username: 'John Doe' })

    expect(result).toEqual({
      id: 1,
      username: 'John Doe',
    })

    done()
  })
})
