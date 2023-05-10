const mysql = require("mysql");

class DB {
  constructor() {
    let params = {
      host: "localhost",
      database: "Biblio",
      user: "root",
      password: "",
    };
    this.db = mysql.createConnection(params);
    this.db.connect((err) => {
      if (err) console.log("Erreur : " + err.message);
      else console.log("Connection is etablished.");
    });
  }

  getInstace() {
    return this.db;
  }
}

db = new DB();

module.exports = db.getInstace();
