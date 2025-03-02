const express = require("express");
const UserModel = require("../src/models/user.model");
const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
  res.setHeader("content-type", "text/html");
  res.status(200).send("<h1>Thanks my God! hello world</h1>");
});
app.get("/users", async (req, res) => {
  //try {
  const users = [
    //await UserModel.find({});
    {
      name: "John Doe",
      email: "john@doe.com",
    },
    {
      name: "Jane Doe",
      email: "Jane@doe.com",
    },
  ];
  res.status(200).json(users);
});
//-----------------------------------------

//---------------------------------------
app.post("/", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

async function myFunction() {
  try {
    const result = await promiseFunction();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
const port = 8080; //porta

app.listen(port, function () {
  console.log(`Rodando com express na porta: ${port}!`);
});
