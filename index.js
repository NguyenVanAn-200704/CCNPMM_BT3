const express = require("express");
const app = express();
app.use(express.json());

// import DB
const db = require("./models");

// test kết nối Sequelize (nó sẽ chạy khi khởi động)
db.sequelize.sync();

// route test
app.get("/", (req, res) => {
  res.send("Hello Express + Sequelize + MySQL!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/api/users", require("./routes/user.routes"));

app.use(express.static("public"));
