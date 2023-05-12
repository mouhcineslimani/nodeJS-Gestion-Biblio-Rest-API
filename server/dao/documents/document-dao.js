class DocumentDao {
  constructor() {
    if (new.target == DocumentDao) {
      throw new Error("It is an Abstract class. Cannot be Instanciated!");
    }
  }
  select() {
    throw new Error("Must be Implemented!");
  }

  selectBy() {
    throw new Error("Must be Implemented!");
  }

  insert({ ISBN, Title, Year_Published, Publisher_ID }) {
    throw new Error("Must be Implemented!");
  }

  update(ISBN, { Title, Year_Published, Publisher_ID }) {
    throw new Error("Must be Implemented!");
  }

  delete(ISBN) {
    throw new Error("Must be Implemented!");
  }
}

module.exports = DocumentDao; // exporter la classe
