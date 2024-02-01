const request = require('supertest');
const { app } = require('../../server');
const routes = require('../../config/routes');

routes(app);

describe("User routes", () => {
  test('should be authenticated', async () => {
    const credentials = {
      userName: "Ruben01",
      password: "123456"
    }

    const response = await request(app).post('/login').send(credentials);

    expect(response.statusCode).toBe(200)
  })

  test('Invalid credentials', async () => {
    const credentials = {
      userName: "Ruben01",
      password: "12345"
    }

    const response = await request(app).post('/login').send(credentials);

    expect(response.statusCode).toBe(400);
  })

  test('User not found', async () => {
    const credentials = {
      userName: "algo",
      password: "123456"
    }

    const response = await request(app).post('/login').send(credentials);

    expect(response.statusCode).toBe(401)
  })

  test('Response has an Object', async () => {
    const credentials = {
      userName: "Ruben01",
      password: "123456"
    }

    const response = await request(app).post('/login').send(credentials);

    expect(response._body).toBeInstanceOf(Object);
  })

  test('Authentication token', async () => {
    const credentials = {
      userName: "Ruben01",
      password: "123456"
    }

    const response = await request(app).post('/login').send(credentials);

    expect(response._body).toEqual(expect.objectContaining({
      token: expect.any(String)
    }))
  })
})
