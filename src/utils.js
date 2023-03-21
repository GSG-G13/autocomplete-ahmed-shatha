const fs = require("fs");

/*
@params {object} res - response object
@params {number} statusCode - status code
@params {string} cType - content type
@params {string} message - message/data to send
*/
const send = (res, statusCode, cType, message) => {
  res.writeHead(statusCode, { "content-type": cType });
  if (cType == "application/json") message = JSON.stringify(message);
  res.end(message);
};
/*
@params {object} err - error object
@params {object} res - response object
*/
const handleServerError = (res, err) => {
  const error = { ...err };
  console.log(err.statusCode); //
  send(res, 500, "text/plain", "server error");
};

/*
@params {object} res - response object
@params {string} filepath - path to file
@params {string} encoding - encoding type
@params {string} fileType - file type
*/

const handleReadingFile = (res, filepath, encoding, fileType) => {
  fs.readFile(filepath, encoding, (err, data) => {
    if (err) {
      handleServerError(res, err);
    } else {
      send(res, 200, fileType, data);
    }
  });
};

module.exports = { send, handleServerError, handleReadingFile };
