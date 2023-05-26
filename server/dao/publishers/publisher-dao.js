class PublisherDao {
  constructor() {
    if (new.target == PublisherDao) {
      throw new Error("It is an Abstract class. Cannot be Instanciated!");
    }
  }

  select() {
    throw new Error("Must be Implemented!");
  }

  selectBy() {
    throw new Error("Must be Implemented!");
  }

  selectById() {
    throw new Error("Must be Implemented!");
  }

  insert({ Publisher_ID, Name, Company }) {
    throw new Error("Must be Implemented!");
  }

  update(Publisher_ID, { Name, Company }) {
    throw new Error("Must be Implemented!");
  }

  delete(Publisher_ID) {
    throw new Error("Must be Implemented!");
  }

  publisherDocument() {
    throw new Error("Must be Implemented!");
  }
}

module.exports = PublisherDao; // exporter la classe
