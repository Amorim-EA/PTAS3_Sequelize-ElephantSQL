const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("postgres://ijmmkoqn:hQmKjpTJ5J8tv1kQRWBfeLrwaPXeZ4K6@silly.db.elephantsql.com/ijmmkoqn",{
define:{
  timetamps:true,
  underscored:true,
},
});

  try {
    sequelize.authenticate();
    console.log('Conectado com o ElephantSQL!');
  } catch (error) {
    console.error('Anteção, a conexão falhou!:', error);
  }

  module.exports={Sequelize,sequelize};