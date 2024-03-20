const UserController = require('../../../controllers/api/v1/users.controller');
const user = new UserController();

const userRoutes = (app) => {

  /**
   * @openapi
   *  /sign-up:
   *    post:
   *      tags:
   *        - User
   *      description: Create new user
   *      operationId: SignUpUser
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/User'
   *      responses:
   *        '200':
   *          description: User successfully logged
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  user:
   *                    $ref: '#/components/schemas/User'
   *                  token:
   *                    type: string
   */

  app.post('/sign-up', (req, res) => {
    user.signUp(req, res);
  })

  /**
   * @openapi
   *  /login:
   *    post:
   *      tags:
   *        - User
   *      description: Authenticate user
   *      operationId: loginUser
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *             type: object
   *             properties:
   *                userName:
   *                  type: string
   *                password:
   *                  type: string
   *             required:
   *              - userName
   *              - password
   *      responses:
   *        '200':
   *          description: User successfully logged
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  user:
   *                    $ref: '#/components/schemas/User'
   *                  token:
   *                    type: string
   * components:
   *    schemas:
   *      User:
   *        type: object
   *        properties:
   *          name:
   *            type: string
   *          userName:
   *            type: string
   *          password:
   *            type: string
   */
  app.post('/login', (req, res) => {
    user.login(req, res);
  })
}

module.exports = userRoutes
