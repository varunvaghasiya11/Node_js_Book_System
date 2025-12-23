const express = require("express");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/book");

const db = require("./database/db");
const app = express();
db();

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", bookRoutes);
app.set("view engine", "ejs");

app.listen(3000, () => {
      console.log("Server is running on port 3000");
});

