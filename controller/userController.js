const User = require('../model/user');

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

const findUsers = async (req, res) => {
    var users = await User.findAll()
        console.log("Mostrando as informações dos usuarios");
        return res.json(users);
}

module.exports = { createUser, findUsers };