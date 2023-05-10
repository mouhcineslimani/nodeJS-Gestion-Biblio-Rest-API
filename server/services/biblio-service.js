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
    console.log(body);
    this.authorDao.insert(callback, body);
  }

  getAuthor(callback, id) {
    this.authorDao.selectBy(callback, id);
  }

  deleteAuthor(callback, id) {
    this.authorDao.delete(callback, id);
  }

  updateAuthor(callback, id, body) {
    this.authorDao.update(callback, id, body);
  }

  getAllPublishers(callback) {
    this.documentDao.select(callback);
  }

  getAllDocuments(callback) {
    this.publisherDao.select(callback);
  }
}

const biblioService = new BiblioService(
  authorDaoMysql,
  documentDaoMysql,
  publisherDaoMysql
);
// s'il y'a une configuration
module.exports = biblioService; // un objet
