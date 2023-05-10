class PublisherDao {
  constructor() {
    if (new.target == PublisherDao) {
      throw new Error("It is an Abstract class. Cannot be Instanciated!");
    }
  }
  select() {
    throw new Error("Must be Implemented!");
  }
}

module.exports = PublisherDao; // exporter la classe
