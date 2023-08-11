#!/bin/sh

git init 

git config --global user.name Amorim-EA
git config --global user.email erick.amorim@estudante.ifms.edu.br 

git remote add origin https://github.com/Amorim-EA/PTAS3_Sequelize-ElephantSQL.git

git add .
echo "Escreva a mensagem"
read msg
git commit -m "$msg"

git push origin master 