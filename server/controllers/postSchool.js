const School = require('../models/school.js')


let postSchool =
	(req, res) => {
		School.create(req.body).then(data => res.send(data))
			.catch(err => { console.log(err) })
	}

module.exports = postSchool