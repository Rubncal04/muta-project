const { User } = require('../../app/models');

describe("User model", () => {
  test('should be new user', async () => {
    const user = {
      name: 'John',
      userName: 'Jcarlson',
      password: 'password'
    }

    const newUser = await User.build(user);
    expect(newUser).toBeInstanceOf(User);
  })

  test('Is valid with different userName', async () => {
    const user1 = {
      name: 'John',
      userName: 'Jcarlson',
      password: 'password'
    }

    const user2 = {
      name: 'John',
      userName: 'Jcarlson1',
      password: 'password'
    }

    const newUser1 = await User.build(user1);
    const newUser2 = await User.build(user2);
    expect(newUser1 !== newUser2).toBeTruthy();
  })

  test('Is not valid with different userName', async () => {
    const user1 = {
      name: 'John',
      userName: 'Jcarlson',
      password: 'password'
    }

    const user2 = {
      name: 'John',
      userName: 'Jcarlson',
      password: 'password'
    }

    const newUser1 = await User.build(user1);
    const newUser2 = await User.build(user2);
    expect(newUser1 === newUser2).toBeFalsy();
  })
})
