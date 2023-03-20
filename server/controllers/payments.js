const stripe = require('stripe')(process.env.STRIPE_SK)

module.exports = (req, res) => {

	stripe.charges.create({
  amount: req.body.amount,
  currency: req.body.currency,
  description: req.body.description,
  source: req.body.source
})
.then(data => {
	res.send('Payment Successful')}
)
.catch(err => {
	res.send('Payment Not Successful')
})

}