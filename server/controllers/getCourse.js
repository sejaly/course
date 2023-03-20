let Courses = require('../models/courses.js')
let User = require('../models/user.js')

module.exports = (req, res) => {
    Courses.findById(req.params.id).populate({ path: 'teachers students', model: 'user' })
        .then(data => { res.send(data) })
        .catch(err => {
            res.send(err)
        })
}