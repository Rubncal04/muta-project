const { User } = require('../../../models');
const JWTModule = require('../../../../middleware/jwt_module');
const bcrypt = require('bcryptjs');

class UserController {
  async login(req, res) {
    try {
      const { userName, password } = req.body;
      const userLogged = await User.findOne({
        where: {
          userName
        }
      });

      if (!userLogged) {
        return res.status(401).json({
          message: 'User not found'
        })
      }

      if (userLogged && bcrypt.compareSync(password, userLogged.password)) {
        const token = JWTModule.encode(userLogged.id);

        res.status(200).json({
          user: userLogged,
          token
        })
      } else {
        res.status(400).json({
          message: 'Invalid credentials'
        })
      }
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  }

  async signUp(req, res) {
    try {
      const { userName, name, password } = req.body;

      const newUser = await User.create({ userName, name, password });
      if (newUser) {
        const token = JWTModule.encode(newUser.id);

        res.json({
          user: newUser,
          token
        })
      }
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  }
}

module.exports = UserController;
