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

  insert(callback, { Publisher_ID, Name, Company }) {
    let query =
      "INSERT INTO publishers ( Publisher_ID, Name, Company ) VALUES ( ?, ?, ?)";
    db.query(query, [Publisher_ID, Name, Company], (err, res) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: { Publisher_ID, Name, Company },
        });
      }
    });
  }

  selectBy(callback, Publisher_ID) {
    let query = "SELECT * FROM publishers WHERE Publisher_ID = ?";
    db.query(query, Publisher_ID, (err, res) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: res[0],
        });
      }
    });
  }

  delete(callback, Publisher_ID) {
    let query = "DELETE FROM publishers WHERE Publisher_ID = ?";
    db.query(query, Publisher_ID, (err, res) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: Publisher_ID,
        });
      }
    });
  }

  update(callback, Publisher_ID, { Name, Company }) {
    let query =
      "UPDATE publishers SET Name = ?, Company = ? WHERE Publisher_ID = ?";
    db.query(query, [Name, Company, Publisher_ID], (err, res) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: {
            Publisher_ID,
            Name,
            Company,
          },
        });
      }
    });
  }

  publisherDocument(callback) {
    let query =
      "SELECT Name , count(*) as number FROM publishers p , titles t where p.Publisher_ID = t.Publisher_ID group by p.Publisher_ID ;";
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
