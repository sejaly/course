let User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
	//FIND USER BY EMAIL
	User.findOne({ email: req.body.email })
		.select('password role')
		.then(data => {
			// VALIDATE PASSWORD
			let validPassword = bcrypt.compareSync(req.body.password, data.password)
			if (!validPassword) {
				res.status(400).send('Email or password is incorrect')
			} else {
				const token = jwt.sign({ _id: data._id, email: data.email, role: data.role }, process.env.TOKEN_SECRET)
				res.status(200).send({ data: data.role, token })
			}
		})
		.catch(err => {
			res.status(400).send('Email or password is incorrect')
		})
}