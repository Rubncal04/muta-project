const UserController = require('../../../controllers/api/v1/users.controller');
const user = new UserController(); 

const userRoutes = (app) => {
 app.post('/sign-up', (req, res) => {
    user.signUp(req, res);
  })

  app.post('/login', (req, res) => {
    user.login(req, res);
  })
}

module.exports = userRoutes
