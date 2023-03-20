const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

  let token = req.headers[token] || req.body.token
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (!err) {
        req.decoded = decoded
        next()
      } else {
        res.status(403).send('Unauthorized access')
      }
    })
  } else {
    res.status(403).send('Unauthorized access')
  }
}