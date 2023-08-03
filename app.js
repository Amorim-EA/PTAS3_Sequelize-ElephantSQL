const connectionDataBase = require('./config/connection');
const userController = require('./controller/userController');
const express = require('express');
const app = express();
const port = 3003;
app.use(express.json());
app.listen(port, () => { console.log(`Run server...${port}`) });

app.get('/', userController.findUsers);

app.post('/user', userController.createUser);