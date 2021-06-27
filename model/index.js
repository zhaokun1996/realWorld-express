const mongoose = require('mongoose');
const { dbUrl } = require('../config/config.default')

// 连接mongodb数据库
mongoose.connect(dbUrl);

var db = mongoose.connection;

// 连接失败
db.on('error', err => {
  console.log('mongodb 数据库连接失败', err);
});

// 连接成功
db.once('open', function () {
  console.log('we connected 成功连接')
});

// 组织导出模型类
module.exports = {
  User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article')),
}

