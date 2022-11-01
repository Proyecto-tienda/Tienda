const mongoose = require('mongoose')

//conection
const URI = process.env.MONGODB_URI
            ? process.env.MONGODB_URI
            : 'mongodb://localhost/dbtest'


mongoose.connect(URI)

const connection = mongoose.connection;

connection.once('open',() => {
    console.log('Data Base Connected:', URI)
})