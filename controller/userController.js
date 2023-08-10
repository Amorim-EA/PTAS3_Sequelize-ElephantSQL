const User = require('../model/user');
const secret = require('../config/auth.json');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    const { name, password, email } = req.body;
    await User.create({
        name: name,
        password: password,
        email: email
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        console.log(`Ops, deu erro: ${erro}`);
    })
}

const findUser = async (req, res) => {
    const user = await User.findOne({
        where: { id: parseInt(req.params.id) },
      });    
      return res.json(user);  
}

const findUsers = async (req, res) => {
    var users = await User.findAll()
        console.log("Mostrando as informações dos usuarios");
        return res.json(users);
}

const deleteUser = async (req, res) => {
    try {
      await User.destroy({ where: { id: parseInt(req.params.id) } });
      res.json('Usuário deletado com sucesso!');
      console.log('Usuário deletado com sucesso!');
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Ocorreu um erro ao deletar o uuário.' });
    }
}

const updateUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
      await User.update({ 
        name: name,
        password: password,
        email: email 
    },{
        where: { id: parseInt(req.params.id) }
    })
      res.json('Usuário alterado com sucesso!');
      console.log('Usuário alterado com sucesso!');
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Ocorreu um erro ao deletar o uuário.' });
    }
}

const authenticateUser = async (req, res) => {
    const { email, password } = req.body;
    try{
      const isUserAuthenticated = await User.findOne({
        where: {
          email: email,
          password: password
        }
      });
      const token = jwt.sign({ id: email}, secret.secret, {
        expireIn: 86400,
      });
      return res.json({
        name: isUserAuthenticated.name,
        email: isUserAuthenticated.email,
        token: token
      });
    } catch (err){
      return res.json("Usuario nâo encontrado!");
    }
}

module.exports = { createUser, findUser, findUsers, deleteUser, updateUser, authenticateUser };