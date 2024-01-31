const User = require('../app/models/user');
const ENV_VARIABLES = require('../config/env_variables');
const jwt = require('jsonwebtoken');

const JWT_KEY = ENV_VARIABLES.JWT_KEY

const JWTModule = {
  encode: function (payload) {
    try {
      const token = jwt.sign({ id: payload }, JWT_KEY);

      return token
    } catch (error) {
      console.log(error);
    }
  },

  decode: async function (token) {
    try {
      if (!token) return null;
      const { id } = jwt.verify(token, JWT_KEY);
      const user = await User.findById(id);

      return user;
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = JWTModule;
