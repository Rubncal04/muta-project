const { Material, Collection } = require('../../../models');

class CollectionsController {
  async getAll(req, res) {
    try {
      const { user } = req.body
      const collections = await Material.findAll({
        where: {
          userId: user.id
        },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: Collection,
            attributes: { exclude: ['createdAt', 'updatedAt'] }
          }
        ]
      })

      res.status(200).json({
        collections
      })
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong'
      })
    }
  }

  async getOne(req, res) {
    try {
      const { user } = req.body
      const { id } = req.params

      const collection = await Material.findAll({
        where: {
          userId: user.id
        },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: Collection,
            where: {
              id
            },
            attributes: { exclude: ['createdAt', 'updatedAt'] }
          }
        ]
      })

      res.status(200).json({
        collection
      })
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong'
      })
    }
  }

  async create(req, res) {
    try {
      const { quantity, date, materialId } = req.body
      const collection = await Collection.create({ materialId, quantity, date })

      if (!collection) {
        return res.status(200).json({
          message: "It couldn't be created"
        })
      }

      res.status(200).json({
        collection
      })
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong'
      })
    }
  }

  async update(req, res) {
    try {
      const { date, quantity } = req.body
      const { id } = req.params
      const updatedCollection = await Collection.update({ date, quantity }, {
        where: {
          id
        }
      })

      if (!updatedCollection) {
        return res.status(200).json({
          message: "It couldn't be updated"
        })
      }

      res.status(200).json({
        message: "Collection successfully updated"
      })
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong'
      })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      const deletedCollection = await Collection.destroy({
        where: {
          id
        }
      })

      if (!deletedCollection) {
        return res.status(200).json({
          message: "It couldn't be deleted"
        })
      }

      res.status(200).json({
        message: "Collection successfully deleted"
      })
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong'
      })
    }
  }
}

module.exports = CollectionsController;
