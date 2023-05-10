const DocumentDao = require("./document-dao");
const db = require("../db");

class DocumentDaoMysql extends DocumentDao {
  constructor() {
    super();
  }

  select(callback) {
    let query = "SELECT * FROM titles";
    db.query(query, (err, result, fields) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: result,
          fields: fields.map((field) => field.name),
        });
      }
    });
  }
}

module.exports = new DocumentDaoMysql();
