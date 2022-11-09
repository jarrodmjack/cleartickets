
const Issue = require('../models/issueModel')

const getIssues = async (req, res) => {
    const issues = await Issue.find()
    res.status(200).json(issues)
}

const createIssue = async (req, res) => {
    let { issueSubject, issueDescription, issueSeverity, issueAssignedTo } = req.body
    if (!issueSeverity) {
        issueSeverity = 'Low'
    }
    // let issueStatus = 'Open'
    const issue = await Issue.create({ issueSubject, issueDescription, issueSeverity, issueAssignedTo, status: 'Open' })
    res.status(200).json({ message: 'Issue Created' })
}

const deleteIssue = async (req, res) => {
    const issueId = req.params.id
    try {
        await Issue.findByIdAndDelete(issueId)
        console.log('success')
        res.status(200).json({ msg: 'issue deleted' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Could not delete issue' })
    }
}


module.exports = { createIssue, getIssues, deleteIssue }