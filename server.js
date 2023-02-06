const express = require("express");

const bodyParser = require("body-parser");
const movieRoutes = require("./routes");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const fs = require("fs");

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", movieRoutes);

// const customCss = fs.readFileSync((process.cwd() + "/swagger.css", "utf8"));

mongoose
  .connect("mongodb://localhost:27017/Movies", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.listen(8080, () => {
  console.log("server started on port 8080");
});
