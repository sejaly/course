const Subject = require('../models/subjects.js')


let postSubject =
	(req, res) => {
		Subject.create(req.body).then(data => res.send(data))
			.catch(err => { console.log(err) })
	}

module.exports = postSubject