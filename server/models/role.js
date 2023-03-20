const mongoose = require('mongoose')

let role = mongoose.model('role', {
  role: 'String'
})

module.exports = role