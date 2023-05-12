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

  insert(callback, { ISBN, Title, Year_Published, Publisher_ID }) {
    let query =
      "INSERT INTO publishers (ISBN, Title, Year_Published, Publisher_ID) VALUES (?, ?, ?, ?)";
    db.query(query, [ISBN, Title, Year_Published, Publisher_ID], (err, res) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: { ISBN, Title, Year_Published, Publisher_ID },
        });
      }
    });
  }

  selectBy(callback, ISBN) {
    let query = "SELECT * FROM publishers WHERE ISBN = ?";
    db.query(query, ISBN, (err, res) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: res[0],
        });
      }
    });
  }

  delete(callback, ISBN) {
    let query = "DELETE FROM publishers WHERE ISBN = ?";
    db.query(query, ISBN, (err, res) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: ISBN,
        });
      }
    });
  }

  update(callback, ISBN, { Title, Year_Published, Publisher_ID }) {
    let query =
      "UPDATE publishers SET Title = ?, Year_Published = ?, Publisher_ID = ? WHERE ISBN = ?";
    db.query(query, [Title, Year_Published, Publisher_ID, ISBN], (err, res) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: {
            ISBN,
            Title,
            Year_Published,
            Publisher_ID,
          },
        });
      }
    });
  }
}

module.exports = new PublisherDaoMysql();
