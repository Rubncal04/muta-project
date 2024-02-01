const userRoutes = require('../app/views/api/v1/user_routes');
const materialRoutes = require('../app/views/api/v1/material_routes');

const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(500).send('Welcome to Muta Project')
  })

  userRoutes(app)
  materialRoutes(app);
}

module.exports = routes
