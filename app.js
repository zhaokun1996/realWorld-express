const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const router = require('./router')
const errorHandler = require('./middleware/error-handler')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(morgan('dev')) // 日志输出
app.use(express.json()) // 解析请求体
app.use(express.urlencoded())
app.use(cors()) // 跨域请求

app.use('/api', router)

// 挂载统一处理服务端错误中间件
app.use(errorHandler())

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
})