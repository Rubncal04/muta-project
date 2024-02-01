const MaterialsController = require('../../../controllers/api/v1/materials.controller');
const authorization = require('../../../../middleware/authorization');

const material = new MaterialsController()

const materialRoutes = (app) => {
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
