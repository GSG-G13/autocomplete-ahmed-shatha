const http = require("http");
const colors = require("colors");
const router = require("./router.js")

const PORT =  process.env.PORT || 4000;

const server = http.createServer(router);

server.listen(PORT, () => {
  console.log(`Server Running in ${PORT} mode on Port ${PORT} `.yellow.bold);
});
