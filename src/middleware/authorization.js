const JWTModule = require('./jwt_module');

module.exports = async function authorization(req) {
  const token = req.headers.authorization || '';

  const user = await JWTModule.decode(token);
  return user
}
