const { Material, User } = require('../../app/models');

describe("Material model", () => {
  test('should be new material', async () => {
    const user = {
      name: 'John',
      userName: 'Jcarlson',
      password: 'password'
    }
    const newUser = await User.build(user);

    const material = {
      userId: newUser.id,
      name: 'Vidrio',
      weight: 1,
      price: 10.05
    }

    const newMaterial = await Material.build(material);

    expect(newMaterial).toBeInstanceOf(Material);
  })

  test('Is not valid without a user', async () => {

    const material = {
      name: 'Vidrio',
      weight: 1,
      price: 10.05
    }

    const newMaterial = await Material.build(material);

    expect(newMaterial.userId === null).toBeFalsy();
  })
})
