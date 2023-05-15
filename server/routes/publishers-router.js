const { Router } = require("express");
const service = require("../services/biblio-service");

const router = new Router();
router.get("/", (req, res) => {
  service.getAllPublishers((result) => {
    res.send(result.data);
    console.log(result.fields);
  });
});

router.get("/statistics", (req, res) => {
  service.getDocumentsPublisher((result) => {
    res.send(result.data);
    console.log(result.fields);
  });
});

router.post("/", (req, res) => {
  service.insertPublisher((result) => {
    res.send(result.data);
  }, req.body);
});

router.get("/:Publisher_ID", (req, res) => {
  service.getPublisher((result) => {
    res.send(result.data);
  }, req.params.Publisher_ID);
});

router.delete("/:Publisher_ID", (req, res) => {
  service.deletePublisher((result) => {
    res.send(result.data);
  }, req.params.Publisher_ID);
});

router.put("/:Publisher_ID", (req, res) => {
  service.updatePublisher(
    (result) => {
      res.send(result.data);
    },
    req.params.Publisher_ID,
    req.body
  );
});

module.exports = router;
