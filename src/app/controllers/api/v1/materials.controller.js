const { Material } = require('../../../models');

class MaterialsController {
  async getAll(req, res) {
    try {
      const { user } = req.body
      const materials = await Material.findAll({
        where: {
          userId: user.id
        }
      });

      if (!materials) {
        res.status(200).json({
          materials: []
        })
      }

      res.status(200).json({
        materials
      })
    } catch (error) {
      res.status(404).json({
        message: "Something went wrong"
      })
    }
  }

  async getOne(req, res) {
    try {
      const { user } = req.body
      const { id } = req.params
      const material = await Material.findOne({
        where: {
          userId: user.id,
          id
        }
      });

      if (!material) {
        res.status(200).json({
          message: "Material not found"
        })
      }

      res.status(200).json({
        material
      })
    } catch (error) {
      res.status(500).json({
        message: "Someting went wrong"
      })
    }
  }

  async create(req, res) {
    try {
      const { user, name, price, weight } = req.body;
      const newMaterial = await Material.create({ userId: user.id, name, price, weight });

      res.status(200).json({
        material: newMaterial
      })
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong'
      })
    }
  }

  async update(req, res) {
    try {
      const materialId = req.params.id;
      const { name, price, weight } = req.body;
      const updatedMaterial = await Material.update({ name, price, weight }, {
        where: {
          id: materialId
        }
      })

      if (!updatedMaterial) {
        res.status(200).json({
          message: "It couldn't be updated"
        })
      }

      res.status(200).json({
        message: "Successfully updated"
      })
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong'
      })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedMaterial = await Material.destroy({
        where: {
          id
        }
      })

      if (!deletedMaterial) {
        res.status(200).json({
          message: "Material not found"
        })
      }

      res.status(200).json({
        message: "Material successfully deleted"
      })
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong'
      })
    }
  }

  calculateBestRoute(req, res) {
    try {
      const { materials, totalLimitWeight } = req.body;
      const newMaterialsList = materials.filter(material => material.weight <= totalLimitWeight).sort((a, b) => a.weight - b.weight);

      if (newMaterialsList.length <= 0) {
        return res.status(200).json({
          message: "The route is not optimized"
        });
      }

      res.status(200).json(newMaterialsList);
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong'
      })
    }
  }
}

module.exports = MaterialsController
