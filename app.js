const connectionDataBase = require('./config/connection');
const express = require('express');
const routes = require('./router/routes')
const app = express();
const port = 3003;
app.use(express.json(), routes);
app.listen(port, () => { console.log(`Run server...${port}`) });