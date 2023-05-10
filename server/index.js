const express = require("express");
const cors = require("cors");
const authorsRouter = require("./routes/authors-router");
const publihsersRouter = require("./routes/publishers-router");
const documentsRouter = require("./routes/documents-router");
const bodyParser = require("body-parser");

class Server {
  constructor(port = 8080) {
    this.port = port;
    // 1. Création d'une instance du server express
    this.app = express();

    this.config();
    this.routing();
  }

  config() {
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }

  routing() {
    // 3. Routage
    this.app.use("/biblio/authors", authorsRouter);
    this.app.use("/biblio/publishers", publihsersRouter);
    this.app.use("/biblio/documents", documentsRouter);
  }

  start() {
    // 4. Démarrage du serveur
    this.app.listen(this.port, () => {
      console.log("Server is running ...");
    });
  }
}

module.exports = Server;
