const User = require('../models/user')

module.exports = (req, res) => {
	User.findById(req.params.id).populate({
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