import React from "react";
import { useState } from "react";

const App = () => {

const [username, setUsername] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState() 

const submitHandler = async (event) => {
  event.preventDefault()
  console.log(username)
  console.log(email)
  console.log(password)
  // call register function
}
  return (
    <div className="container">
      <h1>Register users</h1>
    
      <form onSubmit ={submitHandler}>
            <label> Username:
                <br></br>
                <input onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br></br>
            <br></br>

            <label> Email:
                <br></br>
                <input onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br></br>
            <br></br>

            <label> Password:
                <br></br>
                <input onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br></br>
            <br></br>
            <button type='submit'>Click here to register</button>
        </form>
        {/* TODO: Once register is working. I'd like a list of Registerd users to be displayed on this page */}
    </div>
  );
};

export default App;