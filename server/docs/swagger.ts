import { Express } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Auth & Rules and Permission API',
      description: "API endpoints for a mini Authentification and Rules , Permissions services documented on swagger",
      contact: {
        name: "zakaria Ghachim",
        email: "zakariaghachim96@gmail.com",
        url: "https://github.com/theziko1/AuthFlow-Pro"
      },
      version: '1.0.0',
    },
    servers: [
      {
        url: "http://localhost:3000/",
        description: "Local server"
      }
    ]
  },
  // Specify the correct path for your routes
  apis: [path.join(__dirname, '../routes/*.ts')],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app: Express, port: string) => {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};


export default swaggerDocs;
