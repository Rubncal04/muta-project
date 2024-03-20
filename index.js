const { server, app } = require("./src/server.js");
const routes = require('./src/config/routes.js');
const ENV_VARIABLES = require("./src/config/env_variables.js");
const startSwagger = require('./src/config/swagger.config.js')

const PORT = ENV_VARIABLES.PORT || 3307

async function startServer() {
  await new Promise((resolve) => server.listen({ port: PORT }, resolve));
  routes(app);
  startSwagger(app);
  console.log(`Server listening on port ${PORT}`);
}

startServer().catch((err) => console.error(err));
