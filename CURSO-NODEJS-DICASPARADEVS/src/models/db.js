const Sequelize = require("sequelize");
//Conexão com o banco de dados MySql
const sequelize = new Sequelize("postapp", "root", "15$janeiro1938", {
  host: "localhost",
  dialect: "mysql",
  query: { raw: true },
});
module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
/*1 - Pra quem não está conseguindo exibir as postagens, inserir a linha: query:{raw:true} na criação do database, no arquivo db.js, fica:
const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha'', {
    host: 'localhost',
    dialect: 'mysql',
    query:{raw:true}
});
*/
