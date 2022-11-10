const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({

    issueSubject: {
        type: String,
        required: true
    },
    issueDescription: {
        type: String,
        required: true
    },
    issueSeverity: {
        type: String,
        required: true
    },
    issueFromUser: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('Issue', issueSchema)