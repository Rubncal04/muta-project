const JWTModule = require('./jwt_module');

module.exports = async function authorization(req) {
  let token = req.headers.authorization || '';
  token = token.split('Bearer ')[1]

  const user = await JWTModule.decode(token);
  return user
}
