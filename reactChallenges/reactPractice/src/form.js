 import React , { useState} from 'react'
 



function Form() {
    const [name , setName ] = useState("");
    const [age , setAge] = useState();
  
    return (
      <div className="App">
        <div>
          <h2 className="subtitle is-4">Contact form</h2>
        </div>
  
        {/* Display Data */}
        <div className="input-display">
          <p>Display Name:{name} </p>
          <p>Display Age:{age} </p>
        </div>
  
        {/* Collect User Inputs */}
        <div className="inputs">
          {/* Input name */}
          <div className="field">
            <label className="label">Name: </label>
            <input className="input" type="text" placeholder="enter your name" value={name} onChange={event => setName(event.target.value)}/>
          </div>
  
          {/* Input age */}
          <div className="field">
            <label className="label">Age: </label>
            <input className="input" type="number" placeholder="enter your age" value={age} onChange={event => setAge(event.target.value)}/>
          </div>
        </div>
      
      </div>
    )
  }
  export default Form