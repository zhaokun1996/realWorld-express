const express = require('express')

const router = express.Router()

// 用户登录
router.post('/users/login', async (req, res, next) => {
  try {
    res.send(' post users/login')
  } catch (err) {
    next(err)
  }
})

// 用户注册
router.post('/users', async (req, res, next) => {
  try {
    res.send(' post users')
  } catch (err) {
    next(err)
  }
})

// 获取当前登录用户
router.get('/user', async (req, res, next) => {
  try {
    res.send(' get users')
  } catch (err) {
    next(err)
  }
})

// 更新用户
router.put('/user', async (req, res, next) => {
  try {
    res.send(' put users')
  } catch (err) {
    next(err)
  }
})

module.exports = router