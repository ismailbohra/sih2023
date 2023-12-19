import React, {useState} from 'react'
import SingleStudent from './StudentInfo/SingleStudent/SingleStudent' // make sure to import SingleStudent
import Report from './StudentInfo/Report/Report'
import './StudentList.css'
import { useNavigate } from 'react-router-dom';

function MyStudent() {
  const [showReport,setShowReport] = useState(false);
  const Sdata = [
  
    {
      name: "Student1",
      enroll: "1001"
    },
    {
      name: "Student2",
      enroll: "1002"
    },
    {
      name: "Student3",
      enroll: "1003"
    },
    {
      name: "Student4",
      enroll: "1004"
    },
    {
      name: "Student5",
      enroll: "1005"
    },
    {
      name: "Student6",
      enroll: "1006"
    },
    {
      name: "Student7",
      enroll: "1007"
    },
    {
      name: "Student8",
      enroll: "1008"
    },
    {
      name: "Student9",
      enroll: "1009"
    },
    {
      name: "Student10",
      enroll: "1010"
    },
    {
      name: "Student11",
      enroll: "1011"
    },
    {
      name: "Student12",
      enroll: "1012"
    },
    {
      name: "Student13",
      enroll: "1013"
    },
    {
      name: "Student14",
      enroll: "1014"
    },
    {
      name: "Student15",
      enroll: "1015"
    },
    {
      name: "Student16",
      enroll: "1016"
    },
    {
      name: "Student17",
      enroll: "1017"
    },
    {
      name: "Student18",
      enroll: "1018"
    },
    {
      name: "Student19",
      enroll: "1019"
    },
    {
      name: "Student20",
      enroll: "1020"
    }
    
  ]
  const navigate=useNavigate()
  const navigateto =()=>{
    navigate('/teacher/addfeedback')
  }

  return (
    <>
      <h1 className='StudentListHeading'>MyStudent</h1>

      <div className="container">
      <div className="Students">
        {/* <SingleStudent className="Heading" name={"NAME"} enroll={"Enrollment Number"} showReport={false} setShowReport={false}></SingleStudent> */}
        <SingleStudent className="Heading first-student" name={"NAME"} enroll={"Enrollment Number"} showReport={false} setShowReport={false}></SingleStudent>

      {Sdata.map((student, index) => (
        <div onClick={()=>navigateto()}>
          <SingleStudent key={index} name={student.name} enroll={student.enroll} showReport={showReport} setShowReport={setShowReport} />
        </div>
        ))}
        
        </div>
        
       {showReport &&  
       <div className="SReport">
          <Report></Report>
        </div>
}

        </div>

    </>
  )
}

export default MyStudent