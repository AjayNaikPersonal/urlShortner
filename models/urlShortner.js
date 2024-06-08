const mongoose = require('mongoose')


const urlShortnerSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    }
})


module.exports = mongoose.model("UrlShortner",urlShortnerSchema)