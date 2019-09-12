import React from 'react'

const Team = props => {
    return (
        <>
            {team.map((member, index) => {
            console.log(member)
            return (
            <div key={index}>
                <p>{member.name}</p>
                <p>{member.email}</p>
                <p>{member.role}</p>
             </div>
            )
            })}
        </>
    )
}

export default Team