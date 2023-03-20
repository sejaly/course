const mongoose = require('mongoose')
require('dotenv').config()


let database = mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected")
}).catch(err=>{
    console.log(err)
})

module.exports = database