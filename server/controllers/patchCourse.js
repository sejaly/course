const Courses = require('../models/courses.js')

let patchCourse =
	(req, res) => {
		Courses.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(data => res.send(data))
			.catch(err => { console.log(err) })
	}

module.exports = patchCourse