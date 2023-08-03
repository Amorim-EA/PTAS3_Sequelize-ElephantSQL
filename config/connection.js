const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("postgres://yzvcrxjm:4GH3mpblBHlkzv8cAIsWxu9iKQvF93dQ@babar.db.elephantsql.com/yzvcrxjm",{
define:{
  timetamps:true,
  underscored:true,
},
});

  try {
    sequelize.authenticate();
    console.log('Conectado com o ElephantSQL!');
  } catch (error) {
    console.error('Atenção, a conexão falhou!:', error);
  }

  module.exports={Sequelize,sequelize};