const express = require('express')
const userCtrl = require('../controller/user')
const { body, validationResult } = require('express-validator');
const userValidator = require('../validator/user')
const router = express.Router()

// 用户登录
router.post('/users/login', userCtrl.login)

// 用户注册 表单验证
router.post('/users', userValidator.register, (req, res, next) => { //2.判断验证结果
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next()
}, userCtrl.register)

// 获取当前登录用户
router.get('/user', userCtrl.getCurrentUser)

// 更新用户
router.put('/user', userCtrl.updateCurrentUser)

module.exports = router