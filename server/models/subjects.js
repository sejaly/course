const mongoose = require('mongoose')

let subject = mongoose.model('subject', {
  name: 'String'
})

module.exports = subject