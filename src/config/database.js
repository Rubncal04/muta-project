import ENV_VARIABLES from "./env_variables.js";

export default {
  test: {
    username: ENV_VARIABLES.USER_NAME,
    password: ENV_VARIABLES.PASSWORD,
    database: ENV_VARIABLES.DATABASE,
    host: ENV_VARIABLES.HOST,
    dialect: ENV_VARIABLES.DIALECT,
    port: ENV_VARIABLES.DATABASE_PORT,
    logging: ENV_VARIABLES.LOGGING,
    dialectOptions: {
      "ssl": ENV_VARIABLES.SSL,
      "useUTC": ENV_VARIABLES.USE_UTCL
    }
  }
}
