const mongoose = require('mongoose')

const connect = async (url) => {
    try{
        await mongoose.connect(url)
        return console.log("Connected")
    } catch(e) {
        throw new Error(e)
    }
}

module.exports = connect
