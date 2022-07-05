const controller = require('../Controllers/request.controllers');
const RequestRouter = require("express").Router();

RequestRouter.post('/create',controller.CreateRequest);

module.exports=RequestRouter;