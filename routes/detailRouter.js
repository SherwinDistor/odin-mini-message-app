const { Router } = require('express');
const getDetail = require('../controllers/getDetail');

const detailRouter = Router();

detailRouter.get('/:index', getDetail);

module.exports = detailRouter;
