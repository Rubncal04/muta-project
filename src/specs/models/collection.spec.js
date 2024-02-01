const { Material, Collection, User } = require('../../app/models');

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

    const collection = {
      materialId: newMaterial.id,
      quantity: 10,
      date: "2024-02-05 09:00:00.359-05"
    }
    const newCollection = await Collection.build(collection);

    expect(newCollection).toBeInstanceOf(Collection);
  })

  test('Is not valid without a material', async () => {
    const collection = {
      quantity: 10,
      date: "2024-02-05 09:00:00.359-05"
    }
    const newCollection = await Collection.build(collection);

    expect(newCollection.materialId === null).toBeFalsy();
  })
})
