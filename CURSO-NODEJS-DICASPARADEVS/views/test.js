const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '15$janeiro1938', {
    host:"localhost",
    dialect: 'mysql'
})

/*sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!")
})
.catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})*/

const Postagem = sequelize.define('postagens', {
titulo: {
    type: Sequelize.STRING
},
conteúdo: {
    type: Sequelize.TEXT
}
})
/*Postagem.sync({force:true})*/

Postagem.create({
    titulo: "ESCOLA D. HELVECIO",
    conteudo: "Alunos Matriculados"
})

const Usuario = sequelize.define('usarios', {
    nome: {
        type: Sequelize.STRING
    },
sobrenome: {
    type: Sequelize.STRING
},
idade: {
    type: Sequelize.INTEGER
},
email: {
    type: Sequelize.STRING
}
})

//Usuario.sync({force:true})
Usuario.create({
    nome: "Adalgisa",
    sobrenome: "Souza",
    idade: 64,
    email: 'blabla@email.com'
})

