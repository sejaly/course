let Courses = require('../models/courses.js')

module.exports = (req, res) => {
    Courses.findByIdAndDelete(req.params.id)
        .then(data => { res.send(data) })
        .catch(err => {
            res.send(err)
        })
}