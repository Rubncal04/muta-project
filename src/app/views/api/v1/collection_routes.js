const CollectionsController = require('../../../controllers/api/v1/collections.controller');
const authorization = require('../../../../middleware/authorization');

const collection = new CollectionsController()

const collectionRoutes = (app) => {
  app.get('/api/v1/collections', async (req, res) => {
    const auth = await authorization(req);
    if (!auth) {
      return res.status(401).json({
        message: 'Unauthorized user'
      })
    }

    req.body.user = auth;
    await collection.getAll(req, res);
  })

  app.get('/api/v1/collections/:id', async (req, res) => {
    const auth = await authorization(req);
    if (!auth) {
      return res.status(401).json({
        message: 'Unauthorized user'
      })
    }

    req.body.user = auth;
    await collection.getOne(req, res);
  })

  app.post('/api/v1/collections', async (req, res) => {
    const auth = await authorization(req);
    if (!auth) {
      return res.status(401).json({
        message: 'Unauthorized user'
      })
    }

    await collection.create(req, res);
  })

  app.put('/api/v1/collections/:id', async (req, res) => {
    const auth = await authorization(req);
    if (!auth) {
      return res.status(401).json({
        message: 'Unauthorized user'
      })
    }

    await collection.update(req, res);
  })

  app.delete('/api/v1/collections/:id', async (req, res) => {
    const auth = await authorization(req);
    if (!auth) {
      return res.status(401).json({
        message: 'Unauthorized user'
      })
    }

    await collection.delete(req, res);
  })
}

module.exports = collectionRoutes;
