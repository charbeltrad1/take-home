const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router");

app.use(bodyParser.json());

app.use("/", router);

app.use((err, req, res, next) => {
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
