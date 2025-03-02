const mongoose = require("mongoose");

/*const connectToDatabase = async () => {
  await mongoose.connect("mongodb://localhost:27018/dicasDevs", (error) => {
    if (error) {
      return console.log(
        "Ocorreu um erro ao se conectar com o banco de dados: ",
        error
      );
    }

    return console.log("Conexão ao banco de dados realizada com sucesso!");
  });
};*/

//------------------------------------
const mongoURI = "mongodb://127.0.0.1:27017/dicasDevs ";
//const mongoURI = "mongodb://localhost:27017/dicasDevs "; //const mongoURI = "mongodb://localhost:27017/dicasDevs ?directConnection=true";

function connectToDatabase() {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to Mongo Successfully");
    })
    .catch((err) => {
      console.error("Failed to connect to Mongo: " + err);
    });
}
//---------------------------------
module.exports = connectToDatabase;
