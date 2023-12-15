import React from 'react'
import './singlestudent.css'

export default function SingleStudent({ name, enroll,showReport,setShowReport }) {
  return (
    <div className='SingleStudentContainer'>
      <div className="studentinfo">

        <div className="name">{name}</div>
        <div className="enroll"><span>
          {enroll}
          </span>
        {setShowReport &&
        <button className="feedback">Give Feedback</button>
        }
         {setShowReport && 
        <button className="viewreport" onClick={()=>setShowReport(!showReport)}>View Report</button>
        }
        </div>
      </div>
    </div>
  )
}
