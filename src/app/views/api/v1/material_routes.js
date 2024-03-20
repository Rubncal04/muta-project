const MaterialsController = require('../../../controllers/api/v1/materials.controller');
const authorization = require('../../../../middleware/authorization');

const material = new MaterialsController()

/**
 * 
 * @openapi
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  schemas:
 *    Material:
 *      type: object
 *      properties:
 *        userId:
 *          type: integer
 *        name:
 *          type: string
 *        weight:
 *          type: number
 *        price:
 *          type: number
 *    RequestMaterial:
 *      type: object
 *      properties:
 *        name:
 *         type: string
 *        weight:
 *         type: number
 *        price:
 *         type: number
 *    MaterialList:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/Material'
 *    MaterialListBestRoute:
 *      type: array
 *      items:
 *        properties:
 *          name:
 *            type: string
 *          weight:
 *            type: number
 *          price:
 *            type: number
 *    MaterialListBestRoutResponse:
 *      type: array
 *      items:
 *        properties:
 *          name:
 *            type: string
 *          weight:
 *            type: number
 *          price:
 *            type: number
 *          totalPrice:
 *            type: number
 */

const materialRoutes = (app) => {
  /**
   * @openapi
   * /api/v1/materials:
   *    get:
   *      tags:
   *        - Materials
   *      description: Get all materials
   *      operationId: getAllMaterials
   *      security:
   *        - bearerAuth: []
   *      responses:
   *        '200':
   *          description: All materials
   *          content:
   *            application/json:
   *              schema:
   *                $ref: '#/components/schemas/MaterialList'
   */
  app.get('/api/v1/materials', async (req, res) => {
    const auth = await authorization(req);
    if (!auth) {
      return res.status(401).json({
        message: 'Unauthorized user'
      })
    }

    req.body.user = auth;
    await material.getAll(req, res);
  })

  /**
   * @openapi
   * '/materials/{id}':
   *    get:
   *      tags:
   *        - Materials
   *      description: Get one material
   *      operationId: getOneMaterial
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        id: &id
   *           required: true
   *           type: integer
   *      responses:
   *        '200':
   *          description: All materials
   *          content:
   *            application/json:
   *              schema:
   *                $ref: '#/components/schemas/Material'
   */

  app.get('/api/v1/materials/:id', async (req, res) => {
    const auth = await authorization(req);
    if (!auth) {
      return res.status(401).json({
        message: 'Unauthorized user'
      })
    }

    req.body.user = auth;
    await material.getOne(req, res);
  })

  app.post('/api/v1/materials', async (req, res) => {
    const auth = await authorization(req);
    if (!auth) {
      return res.status(401).json({
        message: 'Unauthorized user'
      })
    }

    req.body.user = auth;
    await material.create(req, res);
  })

  app.post('/api/v1/best-route', async (req, res) => {
    const auth = await authorization(req);
    if (!auth) {
      return res.status(401).json({
        message: 'Unauthorized user'
      })
    }

    material.calculateBestRoute(req, res);
  })

  app.put('/api/v1/materials/:id', async (req, res) => {
    const auth = await authorization(req);
    if (!auth) {
      return res.status(401).json({
        message: 'Unauthorized user'
      })
    }

    await material.update(req, res);
  })

  app.delete('/api/v1/materials/:id', async (req, res) => {
    const auth = await authorization(req);
    if (!auth) {
      return res.status(401).json({
        message: 'Unauthorized user'
      })
    }

    await material.delete(req, res);
  })
}

module.exports = materialRoutes
