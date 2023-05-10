const PublisherDao = require("./publisher-dao");
const db = require("../db");

class PublisherDaoMysql extends PublisherDao {
  constructor() {
    super();
  }

  select(callback) {
    let query = "SELECT * FROM publishers";
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

module.exports = new PublisherDaoMysql();
