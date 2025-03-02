const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./src/models/Post");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

//const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();
//const { Person } = require("./person");
//require("./modules/express");
//const person = new Person("Filipe");

const { connect } = require("mongoose");

const port = 9999; //Muda a porta do servidor

//Config
//Template Engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get("/", function (req, res) {
  Post.findAll().then(function (posts) {
    res.render("home", { posts: posts });
  });
});

app.get("/cad", function (req, res) {
  res.render("formulario");
});

app.post("/add", function (req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(function () {
      res.redirect("/");
    })
    .catch(function (erro) {
      res.send("Houve um erro: " + erro);
    });
});
app.get("/deletar/:id", function (req, res) {
  Post.destroy({ where: { id: req.params.id } })
    .then(function () {
      res.send("Postagem deletada com sucesso!");
    })
    .catch(function (erro) {
      res.send("Esta postagem não existe! ");
    });
});
//const netstat = require("node-netstat");

/*netstat({
  filter: {
    state: "LISTEN",
    protocol: "tcp",
  },
  done: (data) => {
    console.log(data.local.port);
  },
});*/

app.listen(port, function () {
  console.log(`Servidor Rodando na url http://localhost:${port}`);
});
