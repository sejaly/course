const User = require('../models/user.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


let postUser = (req, res) => {
	// CHECK EMAIL TO MAKE SURE USER IT IS NOT A DUPLICATE USER
	User.findOne({email: req.body.email})
		.then(match => {
			if (match) {
				res.send('error')
			} else {
				// ADD PROFILE PICTURE FILE TO REQUEST BODY
				if (req.body.avatar) {
					req.body.avatar = `${req.protocol}://${req.get('host')}/${req.file.filename}`
				} else {
					req.body.avatar = `${req.protocol}://${req.get('host')}/service_default_avatar_182956.png`
				}
				// HASH PASSWORD BEFORE CREATING STUDENT
				req.body.password = bcrypt.hashSync(req.body.password, 10)
				// SIGNUP STUDENT
				User.create(req.body)
					.then(data => {
						const token = jwt.sign({ _id: data._id, email: data.email, role: data.role }, process.env.TOKEN_SECRET)
						res.send({ data, token })
					})
					.catch(err => { console.log(err) })
			}
		})
}

module.exports = postUser