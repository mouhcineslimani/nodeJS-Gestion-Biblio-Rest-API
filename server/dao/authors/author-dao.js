class AuthorDao {
  constructor() {
    if (new.target == AuthorDao) {
      throw new Error("It is an Abstract class. Cannot be Instanciated!");
    }
  }
  select() {
    throw new Error("Must be Implemented!");
  }

  selectBy(name) {
    throw new Error("Must be Implemented!");
  }

  selectById(id) {
    throw new Error("Must be Implemented!");
  }

  insert({ id, name, year }) {
    throw new Error("Must be Implemented!");
  }

  update(id, { name, year }) {
    throw new Error("Must be Implemented!");
  }

  delete(id) {
    throw new Error("Must be Implemented!");
  }
}

module.exports = AuthorDao; // exporter la classe
