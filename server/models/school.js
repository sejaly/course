const mongoose = require('mongoose')

let school = mongoose.model('school', {
	name: {
		type: String,
		required: true,
		unique: true
	},
	website: {
		type: String,
	},
	address: {
		type: String,
	}
})

module.exports = school