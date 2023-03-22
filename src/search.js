const fs = require("fs");
const path = require("path");
const { handleServerError, send } = require("./utils");
/*
@params {object} req - request object
@params {object} res - response object
*/
const searchRoute = (req, res) => {
  const jsonFile = path.join(__dirname, "data.json");
  const search = req.url.split("/")[2].replace(/%20/g, " ");

  fs.readFile(jsonFile, (err, data) => {
    const jsonData = JSON.parse(data);
    const result = [];
    const out = new RegExp(`^${search}`, "i");

    if (err) {
      handleServerError(res, err);
    } else {
      if (search) {
        for (let key in jsonData) {
          if (jsonData[key].match(out))
 
            result.push({ id: key, title: jsonData[key] });

        }
      }
      send(res, 200, "application/json", result);
    }
  });
};

module.exports = searchRoute;
