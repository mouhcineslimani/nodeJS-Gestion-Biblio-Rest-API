class AuthorDao {
  constructor() {
    if (new.target == AuthorDao) {
      throw new Error("It is an Abstract class. Cannot be Instanciated!");
    }
  }
  select() {
    throw new Error("Must be Implemented!");
  }
}

module.exports = AuthorDao; // exporter la classe
