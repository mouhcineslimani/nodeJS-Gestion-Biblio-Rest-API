const authorDaoMysql = require("../dao/authors/author-dao-mysql");
const documentDaoMysql = require("../dao/documents/document-dao-mysql");
const publisherDaoMysql = require("../dao/publishers/publishers-dao-mysql");

class BiblioService {
  constructor(authorDao, documentDao, publisherDao) {
    this.authorDao = authorDao;
    this.documentDao = documentDao;
    this.publisherDao = publisherDao;
  }

  getAllAuthors(callback) {
    this.authorDao.select(callback);
  }

  insertAuthor(callback, body) {
    this.authorDao.insert(callback, body);
  }

  getAuthor(callback, Author) {
    this.authorDao.selectBy(callback, Author);
  }

  getAuthorById(callback, id) {
    this.authorDao.selectById(callback, id);
  }

  deleteAuthor(callback, id) {
    this.authorDao.delete(callback, id);
  }

  updateAuthor(callback, id, body) {
    this.authorDao.update(callback, id, body);
  }

  getAllDocuments(callback) {
    this.documentDao.select(callback);
  }

  insertDocument(callback, body) {
    this.documentDao.insert(callback, body);
  }

  getDocument(callback, ISBN) {
    this.documentDao.selectBy(callback, ISBN);
  }

  deleteDocument(callback, ISBN) {
    this.documentDao.delete(callback, ISBN);
  }

  updateDocument(callback, ISBN, body) {
    this.documentDao.update(callback, ISBN, body);
  }

  getAllPublishers(callback) {
    this.publisherDao.select(callback);
  }

  insertPublisher(callback, body) {
    this.publisherDao.insert(callback, body);
  }

  getPublisher(callback, Name) {
    this.publisherDao.selectBy(callback, Name);
  }

  getPublisherById(callback, Publisher_ID) {
    this.publisherDao.selectById(callback, Publisher_ID);
  }

  deletePublisher(callback, Publisher_ID) {
    this.publisherDao.delete(callback, Publisher_ID);
  }

  updatePublisher(callback, Publisher_ID, body) {
    this.publisherDao.update(callback, Publisher_ID, body);
  }

  getDocumentsPublisher(callback) {
    this.publisherDao.publisherDocument(callback);
  }
}

const biblioService = new BiblioService(
  authorDaoMysql,
  documentDaoMysql,
  publisherDaoMysql
);
// s'il y'a une configuration
module.exports = biblioService; // un objet
