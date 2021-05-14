var express = require("express");
var router = express.Router();
const leadController = require("../controllers/leadController");
/* GET home page. */
router.get("/leads", leadController.getData);
router.post("/leads", leadController.createData);
router.delete("/leads/:id", leadController.deleteData);
router.put("/mark_lead/:id", leadController.updateMark);

module.exports = router;
