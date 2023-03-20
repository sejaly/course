let Courses = require('../models/courses.js')

module.exports = (req, res) => {
    Courses.find({}).populate({ path: 'teachers students', model: 'user' })
        .then(data => { res.send(data) })
        .catch(err => {
            res.send(err)
        })
}