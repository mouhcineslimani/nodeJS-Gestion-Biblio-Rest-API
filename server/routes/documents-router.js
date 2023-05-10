const { Router } = require("express");
const service = require("../services/biblio-service");

const router = new Router();
router.get("/", (req, res) => {
  service.getAllDocuments((result) => {
    res.send(result.data);
    console.log(result.fields);
  });
});
module.exports = router;
