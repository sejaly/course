let Users = require('../models/user.js')
let Courses = require('../models/courses.js')


module.exports = (req, res) => {
	Users.find({ role: {$in:[ 'teacher',  'admin']}}).populate({
		path: 'courses',
		model: 'courses',
		select: 'schedule students subject name',
		populate: {
			path: 'students',
			model: 'user',
			select: 'first_name last_name avatar'
		}
	})
		.then(data => { res.send(data) })
		.catch(err => {
			res.send(err)
		})
}