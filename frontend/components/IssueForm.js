"use client"
import React from 'react'
import { useState } from 'react'



const IssueForm = ({ issues, handleAddIssue }) => {
    const [issueSubject, setIssueSubject] = useState('')
    const [issueDescription, setIssueDescription] = useState('')
    const [issueSeverity, setIssueSeverity] = useState('')
    const [issueFromUser, setIssueFromUser] = useState('')

    const handleIssueSubmit = async (e) => {
        e.preventDefault()
        const issue = { issueSubject, issueDescription, issueSeverity, issueFromUser }
        const response = await fetch('/api/issues/create', {
            method: "POST",
            body: JSON.stringify(issue),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        setIssueSubject('')
        setIssueDescription('')
        setIssueSeverity('')
        setIssueFromUser('')
        handleAddIssue()
    }


    return (
        <div className='container mx-auto bg-slate-200 rounded-lg mb-10'>
            <form className='form-control gap-10 p-10 w-3/4 mx-auto ' id="issueInputForm" onSubmit={handleIssueSubmit}>
                <div className="flex flex-col gap-4">
                    <label className="font-bold text-2xl" htmlFor='issueSubjectInput'>Subject</label>
                    <input
                        required
                        onChange={(e) => setIssueSubject(e.target.value)}
                        value={issueSubject}
                        id="issueSubjectInput"
                        type="text"
                        placeholder="Issue Subject..."
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-bold text-2xl" htmlFor='issueDescInput'>Description</label>
                    <input
                        required
                        onChange={(e) => setIssueDescription(e.target.value)}
                        value={issueDescription}
                        id="issueDescInput"
                        type="text"
                        placeholder="Issue Description..."
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-bold text-2xl" htmlFor='issueSeverityInput'>Severity</label>
                    <select
                        required
                        onChange={(e) => setIssueSeverity(e.target.value)}
                        defaultValue="DEFAULT"
                        id="issueSeverityInput"
                        className="select select-bordered w-full"
                    >
                        <option value="DEFAULT" disabled>Please choose an option</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-bold text-2xl" htmlFor='issueFromUserInput'>Enter Name</label>
                    <input
                        required
                        onChange={(e) => setIssueFromUser(e.target.value)}
                        value={issueFromUser}
                        id="issueFromUserInput"
                        type="text"
                        placeholder="User name..."
                        className="input input-bordered w-full"
                    />
                </div>
                <button className='btn'>Add</button>
            </form>
        </div>
    )
}

export default IssueForm