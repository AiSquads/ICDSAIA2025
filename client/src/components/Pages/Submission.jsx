import React from 'react'
import ManuscriptSubmission from '../Submission_Components/ManuscriptSubmissio'
// import DateDetails from '../Home_Components/Date_Deatils'
import PaperFormat from '../Submission_Components/PaperFormat'
import SubmissionGuidelines from '../Submission_Components/SubmissionGuidelines'
import PolicyOnPlagiarism from '../Submission_Components/PolicyOnPlagiarism'
import ImportantDates from '../Submission_Components/ImportantDates'

const Submission = () => {
  return (
    <div>
      <ManuscriptSubmission />
      <ImportantDates />
      <PaperFormat />
      <SubmissionGuidelines />
      <PolicyOnPlagiarism />
    </div>
  )
}

export default Submission
