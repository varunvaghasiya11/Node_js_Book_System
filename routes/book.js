const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookcontroller");
const upload = require("../middleware/multer");

router.get("/", bookController.getAllBooks);
router.post("/", upload.single("image"), bookController.addBook);
router.get("/edit/:id", bookController.editBook);
router.post("/update/:id", upload.single("image"), bookController.updateBook);
router.get("/delete/:id", bookController.deleteBook);
router.get("/view/:id", bookController.viewBook);

module.exports = router;
