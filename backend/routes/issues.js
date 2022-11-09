const express = require('express')
const router = express.Router()
// create object to import controller methods
const {
    createIssue,
    getIssues,
    deleteIssue,
} = require('../controllers/issuesController')

// router.get('/', getIssues)

router.get('/', getIssues)
router.post('/create', createIssue)
router.delete('/:id', deleteIssue)


module.exports = router
