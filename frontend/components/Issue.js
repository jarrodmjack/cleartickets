import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { FaUserTie } from 'react-icons/fa'

const Issue = ({ issue, handleDeleteIssue, handleCloseIssue }) => {
  return (
    <div className='bg-slate-100 rounded-lg text-black flex flex-col p-4 gap-2 items-start'>
      <p>Issue ID: {issue._id}</p>
      <p className={`${issue.status === "Open" ? "bg-sky-400 rounded px-5 text-white" : "bg-lime-500 rounded py-1 px-6 text-white"}`}>{issue.status}</p>
      <p className='text-xl font-bold'>{issue.issueSubject}</p>
      <p>{issue.issueDescription}</p>
      <div className='flex gap-4'>
        <div className='flex items-center gap-1'>
          <FaRegClock />
          <span>{issue.issueSeverity}
          </span>
        </div>
        <div className='flex items-center gap-1'>
          <FaUserTie />
          <span>
            {issue.issueFromUser}
          </span>
        </div>
      </div>
      <div className='flex gap-2'>
        <button
          onClick={() => handleCloseIssue(issue._id)}
          className='btn bg-amber-300 text-white'>
          Close
        </button>
        <button
          onClick={() => handleDeleteIssue(issue._id)}
          className='btn bg-red-500 text-white'>
          Delete
        </button>
      </div>
    </div>
  )
}

export default Issue