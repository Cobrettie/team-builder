import React, { useState } from 'react'
import '../App.css'

const Form = (props) => {
    // console.log(props)

    //set initial value for members
    const initialMembers = { 
        name: "",
        email: "",
        role: "" 
    }

    //set up a state property for team member list
    const [member, setMember] = useState(initialMembers)

    // set up change handler function to handle changing state
    const handleChange = event => {
        console.log(member)
      setMember({ ...member, [event.target.name]: event.target.value })
    }

    // set up handleSubmit function for submitting the form
    const handleSubmit = event => {
        // console.log(member)
        event.preventDefault()
        props.setTeam([...props.team, member])
    }

    return (
        <div className="App">
            <div className="form-container">
                <h1>Form</h1>
                <form onSubmit={event => handleSubmit(event)}>
                    <label>
                        Name:
                        <input 
                            type="text"
                            name="name"
                            value={member.name}
                            onChange={event => handleChange(event)}
                        />
                    </label>
                    <label>
                        Email:
                        <input 
                            type="text"
                            name="email"
                            value={member.email}
                            onChange={event => handleChange(event)}
                        />
                    </label>
                    <label>
                        Role:
                        <input 
                            type="text"
                            name="role"
                            value={member.role}
                            onChange={event => handleChange(event)}
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form