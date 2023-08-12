const mongoose = require( 'mongoose' )

const Schema = mongoose.Schema

const testSchema = new Schema({
    author: {
        type: String,
        required: true,
    },
    paragraph: {
        type: String,
        required: true
    },
    score: {
        type: String,
        default: "0"
    }
} )

module.exports = mongoose.model('Test', testSchema)