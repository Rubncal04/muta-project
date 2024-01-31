const { User } = require('../../../models');
const JWTModule = require('../../../../middleware/jwt_module');
const bcrypt = require('bcryptjs');

class UserController {
  async login(req, res) {
    try {
      const { userName, password } = req.body
      const userLogged = await User.findOne({ userName: userName });

      if (!userLogged) {
        res.status(404).json({
          message: 'User not found'
        })
      }

      if (userLogged && bcrypt.compareSync(password, userLogged.password)) {
        const token = JWTModule.encode(userLogged.id);

        res.status(500).json({
          token
        })
      } else {
        res.status(404).json({
          message: 'Invalid credentials'
        })
      }
    } catch (error) {
      res.status(404).json({ error: "Something went wrong" });
    }
  }

  async signUp(req, res) {
    try {
      const { userName, name, password } = req.body;

      const newUser = await User.create({ userName, name, password });
      if (newUser) {
        const token = JWTModule.encode(newUser.id);

        res.json({
          token
        })
      }
    } catch (error) {
      res.status(404).json({ error: "Something went wrong" });
    }
  }
}

module.exports = UserController;
