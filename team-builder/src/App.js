import React, { useState } from 'react'
import Form from './Components/Form'
import './App.css'

function App() {

  //set up a state property for team member list
    const [member, setMember] = useState([])

    // useState({ name: "", email: "", role: "" })

  return (
    <div className="App">
      <h1>Team Builder Form</h1>
      <Form />
    </div>
  )
}

export default App
