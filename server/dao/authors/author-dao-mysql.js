const AuthorDao = require("./author-dao");
const db = require("../db");

class AuthorDaoMysql extends AuthorDao {
  constructor() {
    super();
  }

  select(callback) {
    let query = "SELECT * FROM authors";
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

  insert(callback, { Au_ID, Author, Year_Born }) {
    let query =
      "INSERT INTO authors (Au_ID, Author, Year_Born) VALUES (?, ?, ?)";
    db.query(query, [Au_ID, Author, Year_Born], (err, res) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: { Au_ID, Author, Year_Born },
        });
      }
    });
  }

  selectBy(callback, id) {
    let query = "SELECT * FROM authors WHERE Au_ID = ?";
    db.query(query, id, (err, res) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: res[0],
        });
      }
    });
  }

  delete(callback, id) {
    let query = "DELETE FROM authors WHERE Au_ID = ?";
    db.query(query, id, (err, res) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: id,
        });
      }
    });
  }

  update(callback, id, { Author, Year_Born }) {
    let query = "UPDATE authors SET Author = ? , Year_Born = ? WHERE Au_ID = ?";
    db.query(query, [Author, Year_Born, id], (err, res) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: {
            Au_ID: id,
            Author: Author,
            Year_Born: Year_Born,
          },
        });
      }
    });
  }
}

module.exports = new AuthorDaoMysql();
