
const Issue = require('../models/issueModel')

const getIssues = async (req, res) => {
    try{
        const issues = await Issue.find()
        res.status(200).json(issues)
    } catch(err){
        res.status(500).json({message: 'Could not get issues'})
    }
 
}

const createIssue = async (req, res) => {
    try {
        let { issueSubject, issueDescription, issueSeverity, issueFromUser } = req.body
        if (!issueSeverity) {
            issueSeverity = 'Low'
        }
        const issue = await Issue.create({ issueSubject, issueDescription, issueSeverity, issueFromUser, status: 'Open' })
        res.status(200).json({ message: 'Issue Created' })
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Could not create issue, please try again'})
    }

}

const closeIssue = async (req, res) => {
    try {
        const issueId = req.params.id
        await Issue.findByIdAndUpdate(issueId, { status: 'Closed' })
        const issues = await Issue.find()
        res.status(200).json(issues)
    } catch (err) {
        console.error(err)
        res.status(500).json({ err: 'Failed to close ticket' })
    }
}

const deleteIssue = async (req, res) => {
    const issueId = req.params.id
    try {
        await Issue.findByIdAndDelete(issueId)
        console.log('success')
        res.status(200).json({ msg: 'Issue deleted' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Could not delete issue' })
    }
}


module.exports = { createIssue, getIssues, closeIssue, deleteIssue }