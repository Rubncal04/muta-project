const dotenv = require('dotenv');

dotenv.config();

const ENV_VARIABLES = Object.freeze({
  PORT: process.env.PORT,
  JWT_KEY: process.env.JWT_KEY,
  NODE_ENV: process.env.NODE_ENV,
  USER_NAME: process.env.USER_NAME,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DATABASE,
  HOST: process.env.HOST,
  DIALECT: process.env.DIALECT,
  DATABASE_PORT: process.env.DATABASE_PORT,
  SSL: (process.env.SSL === 'true'),
  USE_UTC: (process.env.USE_UTC === 'true'),
  LOGGING: (process.env.LOGGING === 'true')
});

module.exports = ENV_VARIABLES;
