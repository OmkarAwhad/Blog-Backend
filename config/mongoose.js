const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect = () => {
     mongoose.connect(process.env.DB_URL)
     .then(console.log('DB connnected'))
     .catch((e) => {
          console.log(e)
          process.exit(1)
     })
}

module.exports = dbConnect;