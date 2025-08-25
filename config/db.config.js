module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "20072004", // thay bằng mật khẩu root của bạn
  DB: "ccnpmm_bt3", // hoặc database bạn đã tạo
  dialect: "mysql",
  pool: {
    max: 5, // số connection tối đa
    min: 0,
    acquire: 30000, // thời gian chờ (ms) trước khi throw error
    idle: 10000, // thời gian 1 connection nhàn rỗi sẽ bị giải phóng
  },
};
