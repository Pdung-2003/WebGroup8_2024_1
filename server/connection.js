const { Sequelize } = require('sequelize');
require('dotenv').config();


// Tạo đối tượng Sequelize với các thông tin từ file .env
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql', // thay đổi 'mysql' thành 'postgres', 'sqlite', hoặc 'mssql' nếu sử dụng hệ quản trị khác
    logging: false, 
});

// Kiểm tra kết nối
sequelize.authenticate()
    .then(() => {
        console.log('Connected to the MySQL database using Sequelize.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
