const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require("sequelize");

// tạo Sequelize instance
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
});

// kiểm tra kết nối
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Kết nối database thành công!");
  })
  .catch((err) => {
    console.error("❌ Không thể kết nối DB:", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./user.model.js")(sequelize, DataTypes);

// export
module.exports = db;
