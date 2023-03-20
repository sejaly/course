const User = require('../models/user')

module.exports = (req, res) => {
    User.find({ role: req.params.role })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
}