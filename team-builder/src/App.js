import React, { useState } from 'react'
import Form from './Components/Form'
import './App.css'

function App() {
  // set up state for team
  const [team, setTeam] = useState([])

  return (
    <div className="App">
      <h1>Team Builder Form</h1>
      <Form />
    </div>
  )
}

export default App
