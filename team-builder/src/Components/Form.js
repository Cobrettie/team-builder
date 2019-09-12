import React from 'react'

const Form = () => {

    return (
        <div className="App">
            <div className="form-container">
                <h1>Form</h1>
                
                <form>
                    <label>
                        Name:
                        <input 
                            type="text"
                        />
                    </label>
                    <label>
                        Email:
                        <input 
                            type="text"
                        />
                    </label>
                    <label>
                        Role:
                        <input 
                            type="text"
                        />
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Form