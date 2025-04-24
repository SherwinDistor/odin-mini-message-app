const { Router } = require('express');
const getForm = require('../controllers/getForm');
const postMessage = require('../controllers/postMessage');

const newRouter = Router();
newRouter.get('/', getForm);
newRouter.post('/', postMessage);

module.exports = newRouter;
