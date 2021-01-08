mongoose = require('mongoose')

const Schema = mongoose.Schema

noteSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('note', noteSchema)