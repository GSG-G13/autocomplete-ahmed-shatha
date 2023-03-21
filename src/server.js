const http = require("http");
const colors = require("colors");
const router = require("./router.js")

const PORT = 5000;

const server = http.createServer(router);

server.listen(PORT, () => {
  console.log(`Server Running in ${PORT} mode on Port ${PORT} `.yellow.bold);
});
