const { send, handleReadingFile, useStatic } = require("./utils");
const searchRoute = require("./search");
const path = require("path");
const fs = require("fs");
const router = (req, res) => {
  const endpoint = req.url;
  const method = req.method;
  

  if (endpoint === "/") {
    const filePath = useStatic("index.html");
    handleReadingFile(res, filePath, "utf-8", "text/html");
  } else if (endpoint === "/css/stylesheet.css") {
    const filePath = useStatic("css/stylesheet.css");
    handleReadingFile(res, filePath, "utf-8", "text/css");
  } else if (endpoint === "/js/index.js") {
    const filePath = useStatic("js/index.js");
    handleReadingFile(res, filePath, "utf-8", "text/javascript");
  } else if (endpoint === "/js/fetch.js") {
    const filePath = useStatic("js/fetch.js");
    handleReadingFile(res, filePath, "utf-8", "text/javascript");
  }
  else if(endpoint.includes('search')){

    searchRoute(req, res);
    
  }
   else {
    send(res, 404, "text/html", "NOT FOUND");
  }
};
module.exports = router;
