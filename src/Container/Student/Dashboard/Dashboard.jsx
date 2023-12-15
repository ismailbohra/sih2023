import React from 'react'
import Cards from '../../../Components/Cards/Cards'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate=useNavigate()
  return (
    
    <div>
    <h1>Welcome</h1>
    <h3>For Further Analysis and Report Generation, Please Take the Test.</h3>
    <button onClick={()=>navigate('../test')}>Take Test</button>
  </div>
  )
}

export default Dashboard