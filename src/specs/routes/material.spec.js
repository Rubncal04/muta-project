const request = require('supertest');
const { app } = require('../../server');
const routes = require('../../config/routes');

routes(app);

describe("Material routes", () => {
  test('Create material', async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2ODA4MjE4fQ.XBtE5y7-SYvqnjaTkTyRYHAfBFUAZf6O9iKaI16OSLc"

    const material = {
      name: "Vidrios",
      weight: 3.9,
      price: 1.2
    }

    const response = await request(app)
      .post('/api/v1/materials')
      .set("authorization", token)
      .send(material);

    expect(response.statusCode).toBe(200)
  })

  test('Create meterial response has an Object', async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2ODA4MjE4fQ.XBtE5y7-SYvqnjaTkTyRYHAfBFUAZf6O9iKaI16OSLc"

    const material = {
      name: "Agua",
      weight: 3.9,
      price: 1.2
    }

    const response = await request(app)
      .post('/api/v1/materials')
      .set("authorization", token)
      .send(material);

    expect(response._body).toBeInstanceOf(Object);
  })

  test('Get one material response an object', async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2ODA4MjE4fQ.XBtE5y7-SYvqnjaTkTyRYHAfBFUAZf6O9iKaI16OSLc"

    const id = 1
    const response = await request(app)
      .get(`/api/v1/materials/${id}`)
      .set("authorization", token);

    expect(response._body).toBeInstanceOf(Object);
  })

  test('Get one material', async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2ODA4MjE4fQ.XBtE5y7-SYvqnjaTkTyRYHAfBFUAZf6O9iKaI16OSLc"

    const id = 1
    const response = await request(app)
      .get(`/api/v1/materials/${id}`)
      .set("authorization", token);

    expect(response.statusCode).toBe(200);
  })

  test('Get one unauthorized', async () => {
    const id = 1
    const response = await request(app)
      .get(`/api/v1/materials/${id}`)

    expect(response.statusCode).toBe(401);
  })

  test('Get all materials response an object', async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2ODA4MjE4fQ.XBtE5y7-SYvqnjaTkTyRYHAfBFUAZf6O9iKaI16OSLc"

    const response = await request(app)
      .get('/api/v1/materials')
      .set("authorization", token);

      expect(Array.isArray(response._body)).toBeTruthy();
  })

  test('Get all materials', async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2ODA4MjE4fQ.XBtE5y7-SYvqnjaTkTyRYHAfBFUAZf6O9iKaI16OSLc"

    const response = await request(app)
      .get('/api/v1/materials')
      .set("authorization", token);

      expect(response.statusCode).toBe(200);
  })

  test('Get all materials should be unauthorized', async () => {
    const response = await request(app)
      .get('/api/v1/materials')

      expect(response.statusCode).toBe(401);
  })

  test('Create material unauthorized', async () => {
    const material = {
      name: "Vidrios",
      weight: 3.9,
      price: 1.2
    }

    const response = await request(app)
      .post('/api/v1/materials')
      .send(material);

    expect(response.statusCode).toBe(401)
  })

  test('Update material', async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2ODA4MjE4fQ.XBtE5y7-SYvqnjaTkTyRYHAfBFUAZf6O9iKaI16OSLc"

    const material = {
      name: "Plástico",
      weight: 3.9,
      price: 1.2
    }

    const id = 2

    const response = await request(app)
      .put(`/api/v1/materials/${id}`)
      .set("authorization", token)
      .send(material);

    expect(response.statusCode).toBe(200)
  })

  test('Update material has property message', async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2ODA4MjE4fQ.XBtE5y7-SYvqnjaTkTyRYHAfBFUAZf6O9iKaI16OSLc"

    const material = {
      name: "Plástico",
      weight: 3.9,
      price: 1.2
    }

    const id = 2

    const response = await request(app)
      .put(`/api/v1/materials/${id}`)
      .set("authorization", token)
      .send(material);

    expect(response._body).toEqual(expect.objectContaining({
      message: expect.any(String)
    }))
  })

  test('Update material should not be unauthorized', async () => {
    const material = {
      name: "Plástico",
      weight: 3.9,
      price: 1.2
    }
    const id = 2

    const response = await request(app)
      .put(`/api/v1/materials/${id}`)
      .send(material);

    expect(response.statusCode).toBe(401)
  })

  test('Delete material', async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2ODA4MjE4fQ.XBtE5y7-SYvqnjaTkTyRYHAfBFUAZf6O9iKaI16OSLc"
    const id = 2

    const response = await request(app)
      .delete(`/api/v1/materials/${id}`)
      .set("authorization", token);

    expect(response.statusCode).toBe(200)
  })

  test('Delete material has property message', async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2ODA4MjE4fQ.XBtE5y7-SYvqnjaTkTyRYHAfBFUAZf6O9iKaI16OSLc"
    const id = 2

    const response = await request(app)
      .delete(`/api/v1/materials/${id}`)
      .set("authorization", token);

    expect(response._body).toEqual(expect.objectContaining({
      message: expect.any(String)
    }))
  })

  test('Delete material should be unauthorized', async () => {
    const id = 2

    const response = await request(app)
      .delete(`/api/v1/materials/${id}`)

    expect(response.statusCode).toBe(401)
  })

})