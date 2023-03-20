const Courses = require('../models/courses.js')

let patchCourseStudents =
	(req, res) => {
		Courses.findByIdAndUpdate(req.params.id, {$push: req.body}, { new: true }).then(data => res.send(data))
			.catch(err => { console.log(err) })
	}

module.exports = patchCourseStudents