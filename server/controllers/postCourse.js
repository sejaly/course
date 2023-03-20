const Courses = require('../models/courses.js')


let postCourse =
	(req, res) => {
		Courses.create(req.body).then(data => res.send(data))
			.catch(err => { console.log(err) })
	}

module.exports = postCourse