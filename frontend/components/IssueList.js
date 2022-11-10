import React from 'react'
import Issue from './Issue'

const IssueList = ({ issues, handleDeleteIssue, handleCloseIssue }) => {
  console.log(issues)
  if (issues.length > 0) {
    return (
      <div className='flex flex-col gap-10'>
          {issues.map((issue, i) => (
            <Issue handleCloseIssue={handleCloseIssue} handleDeleteIssue={handleDeleteIssue} key={issue._id} issue={issue} />
          ))}
      </div>
    )
  } else {
    return (
      <div>
        No issues created
      </div>
    )
  }

}

export default IssueList