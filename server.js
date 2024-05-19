const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");

var corsOptions = {
    origin: "http://localhost:808"
  };

  app.use(cors(corsOptions));

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ x: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

  const PORT = 8080;

  require("./app/routes/route.config")(app);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });



