"use client"
import IssueForm from '../components/IssueForm'
import IssueList from '../components/IssueList'
import { useEffect, useState } from 'react'


const Home = () => {

  const [issues, setIssues] = useState([])

  useEffect(() => {
    const fetchIssues = async () => {
      const res = await fetch('/api/issues')
      const data = await res.json()
      setIssues(data)
    }
    fetchIssues()
  }, [])

  const handleDeleteIssue = async (issueId) => {
    console.log(`deleted issue ${issueId}`)
    const res = await fetch(`/api/issues/${issueId}`, {
      method: 'DELETE',
    })
    const data = await res.json()
    setIssues(issues.filter(issue => issue._id !== issueId))
  }
  


  const handleCloseIssue = async (issueId) => {
      console.log(issueId)
      const res = await fetch(`/api/issues/${issueId}`, {
        method: 'PUT',
        body: issueId,
      })
      const data = await res.json()
      setIssues(data)
    // let updatedIssues = issues.map((issue, i) => issue)
    // setIssues()
    // function will take in an id from the click event
    // change that ticket status to "closed"
    // modify that issue in database 
    // reset issues state
  }

  const handleAddIssue = () => {
    const fetchIssues = async () => {
      const res = await fetch('/api/issues')
      const data = await res.json()
      setIssues(data)
    }
    fetchIssues()
  }

  return (
    <div className='container mx-auto'>
      <h1 className="text-3xl my-10">Submit a ticket here</h1>
      <IssueForm handleAddIssue={handleAddIssue} issues={issues} setIssues={setIssues}/>
      <IssueList handleDeleteIssue={handleDeleteIssue} handleCloseIssue={handleCloseIssue} issues={issues} />
    </div>
  )
}

export default Home
