import React, { useState } from 'react'
import Team from './Components/Team'
import Form from './Components/Form'
import './App.css'

function App() {
  // set up state for team
  const [team, setTeam] = useState([{
    name: "cobrettie",
    email: "cobrettie@email",
    role: "dev"
  }])

  return (
    <div className="App">
      <h1>Team Builder Form</h1>
      <Team team={team} />
      <Form team={team} setTeam={setTeam} />
    </div>
  )
}

export default App
