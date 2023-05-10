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

  insert(callback, { id, name, year }) {
    let query =
      "INSERT INTO authors (Au_ID, Author, Year_Born) VALUES (?, ?, ?)";
    db.query(query, [id, name, year], (err, res) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: { id, name, year },
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

  update(callback, id, { name, year }) {
    let query = "UPDATE authors SET Author = ? , Year_Born = ? WHERE Au_ID = ?";
    db.query(query, [name, year, id], (err, res) => {
      if (err) console.log("Erreur :" + err.message);
      else {
        callback({
          data: {
            Au_ID: id,
            Author: name,
            Year_Born: year,
          },
        });
      }
    });
  }
}

module.exports = new AuthorDaoMysql();
