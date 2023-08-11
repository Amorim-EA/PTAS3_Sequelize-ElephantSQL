const express = require('express');
const routes = express.Router();

const userController = require('../controller/userController');

routes.get('/', (req,res) => res.send("API-USER"));

routes.get('/user/:id', userController.findUser);

routes.get('/user', userController.findUsers);

routes.post('/user', userController.createUser);

routes.put('/user/:id', userController.updateUser);

routes.delete('/user/:id', userController.deleteUser);

routes.post('/user/authenticated', userController.authenticateUser);

module.exports = routes;