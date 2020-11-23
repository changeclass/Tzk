const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
  name: { type: String, required: true }
})

// 生成模型
module.exports = model('User', userSchema)