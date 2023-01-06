import React from "react";
import RegisterUser from "./components/RegisterUser";
import ListUsers from "./components/ListUsers";
import LoginUser from "./components/LoginUser";
import { useState } from "react";
import { getCookie } from "./common";
import { authCheck } from "./utils";

const App = () => {
  const [activeUser, setActiveUser] = useState();
  let cookie = getCookie('jwt_token')
  const loginWithToken = async(cookie) => {
    const user = await authCheck(cookie)
    setActiveUser(user)
  }
  if (cookie !== false) {
    loginWithToken(cookie)
  }
  return (
    <div>
        {activeUser ? (<h1>{'Welcome' + activeUser}</h1>) : (<h1>Please login or register</h1>)}
        <RegisterUser />
        <ListUsers />
        <LoginUser setter={setActiveUser}/>
    </div>    
  )
};

export default App;