import React from "react";
import { useState } from "react";
import { loginUser } from "../utils"

const LoginUser = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = async(e) => {
        e.preventDefault()
        const user = {username: username, password: password};
        const data = await loginUser(user, props.setter);
        console.log(data)

    }
    return (
        <div>
            <form
            onSubmit={submitHandler}
            >
                <input 
                placeholder="Username"
                onChange={(e) => {setUsername("" + e.target.value + "")}}
                />
                <input 
                placeholder="Password"
                onChange={(e) => {setPassword("" + e.target.value + "")}}
                />
                <button
                type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginUser