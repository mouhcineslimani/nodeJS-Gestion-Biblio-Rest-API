const { Router } = require("express");
const service = require("../services/biblio-service");

const router = new Router();

router.get("/", (req, res) => {
  service.getAllAuthors((result) => {
    res.send(result.data);
  });
});

router.post("/", (req, res) => {
  service.insertAuthor((result) => {
    res.send(result.data);
  }, req.body);
});

router.get("/:Author", (req, res) => {
  service.getAuthor((result) => {
    res.send(result.data);
  }, req.params.Author);
});

router.get("/search/:id", (req, res) => {
  service.getAuthorById((result) => {
    res.send(result.data);
  }, req.params.id);
});

router.delete("/:id", (req, res) => {
  service.deleteAuthor((result) => {
    res.send(result.data);
  }, req.params.id);
});

router.put("/:id", (req, res) => {
  service.updateAuthor(
    (result) => {
      res.send(result.data);
    },
    req.params.id,
    req.body
  );
});

module.exports = router;
