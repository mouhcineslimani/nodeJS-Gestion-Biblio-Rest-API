const { Router } = require("express");
const service = require("../services/biblio-service");

const router = new Router();
router.get("/", (req, res) => {
  service.getAllDocuments((result) => {
    res.send(result.data);
    console.log(result.fields);
  });
});

router.post("/", (req, res) => {
  service.insertDocument((result) => {
    res.send(result.data);
  }, req.body);
});

router.get("/:ISBN", (req, res) => {
  service.getDocument((result) => {
    res.send(result.data);
  }, req.params.ISBN);
});

router.delete("/:ISBN", (req, res) => {
  service.deleteDocument((result) => {
    res.send(result.data);
  }, req.params.ISBN);
});

router.put("/:ISBN", (req, res) => {
  service.updateDocument(
    (result) => {
      res.send(result.data);
    },
    req.params.ISBN,
    req.body
  );
});

module.exports = router;
