import { server, app } from "./src/server.js";
// import routes from "./src/config/routes.js";
import ENV_VARIABLES from "./src/config/env_variables.js";

const PORT = ENV_VARIABLES.PORT || 3307

async function startServer() {
  await new Promise((resolve) => server.listen({ port: PORT }, resolve));
  // routes(app);
  console.log(`Server listening on port ${PORT}`);
}

startServer().catch((err) => console.error(err));
