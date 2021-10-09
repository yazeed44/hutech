const express = require("express"); //establish connections from/to server
const dotenv = require("dotenv"); //to access .env variables
const log4js = require("log4js");
const bodyParser = require('body-parser');

const app = express();

console.log("Test");

const logger = log4js.getLogger(); //initiate logger object.
dotenv.config(); //load .env variables to the server as process.env.{variable_name}
 
// logger.level = process.env.LOGGER_LEVEL;
logger.level = 'INFO';

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended:true}))
app.listen(2021, function () {
  logger.info("Server running at port:   " + 2021);
  logger.info("LOGGER_LEVEL:  ", logger.level.levelStr);
});