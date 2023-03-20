let Users = require('../models/user.js')
let Courses = require('../models/courses.js')


module.exports = (req, res) => {
	Users.find({ role: 'student' }).populate({
		path: 'courses',
		model: 'courses',
		select: 'schedule teachers subject name',
		populate: {
			path: 'teachers',
			model: 'user',
			select: 'first_name last_name avatar'
		}
	})
		.then(data => { res.send(data) })
		.catch(err => {
			res.send(err)
		})
}