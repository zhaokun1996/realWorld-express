const express = require('express')

const router = express.Router()

// 获取指定用户资料
router.get('/:username', async (req, res, next) => {
  try {
    res.send(' post profiles/username')
  } catch (err) {
    next(err)
  }
})

// 关注用户
router.post('/:username/follow', async (req, res, next) => {
  try {
    res.send(' post profiles/follow')
  } catch (err) {
    next(err)
  }
})

// 取消关注
router.delete('/:username/follow', async (req, res, next) => {
  try {
    res.send(' delete users')
  } catch (err) {
    next(err)
  }
})



module.exports = router