const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/", bookController.getAllBooks);
router.post("/", bookController.addBook);
router.get("/edit/:id", bookController.editBook);
router.post("/update/:id", bookController.updateBook);
router.get("/delete/:id", bookController.deleteBook);
router.get("/view/:id", bookController.viewBook);

module.exports = router;
