const { User } = require('../model')

// 用户登录
exports.login = async (req, res, next) => {
  try {
    // JSON.parse('22187947')
    res.send(' 用户登录 users/login')
  } catch (err) {
    next(err)
  }
}

// 注册
exports.register = async (req, res, next) => {
  try {
    // 1. 获取请求体数据
    console.log(req.body);
    // 2. 验证数据
    // 2.1 基本数据验证
    // 2.2 业务数据验证

    // 3. 验证成功 保存到数据库
    const user = new User(req.body.user)
    await user.save()

    // 4. 发送响应
    res.status(201).json({
      user
    })
    // res.send(' register')
  } catch (err) {
    next(err)
  }
}

// 获取当前登录用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    res.send(' get 获取当前登录用户')
  } catch (err) {
    next(err)
  }
}

// 更新用户
exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send(' put users')
  } catch (err) {
    next(err)
  }
}