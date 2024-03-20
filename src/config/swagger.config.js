const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Muta api docs',
      version: '1.0.0',
    },
  },
  apis: ['src/app/views/api/v1/user_routes.js', 'src/app/views/api/v1/*.js']
};

const swaggerDocs = swaggerJsdoc(options);

const startSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  app.use('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'Application/json');
    res.send(swaggerDocs)
  });
}

module.exports = startSwagger
