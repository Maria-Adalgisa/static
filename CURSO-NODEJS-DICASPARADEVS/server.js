import { createServer } from "node:http";

const server = createServer(() => {
  console.log("O Servidor rodando!");
});
server.listen(8081);

//localhost: 3333
//localhost: 3332
