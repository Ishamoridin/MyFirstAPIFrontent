import React from "react";
import { useState } from "react";
import { readUsers } from "../utils";

const ListUsers = () => {
    const [userList, setUserList] = useState([]);
    const clickHandler = async() => {
        const results = await readUsers()
        setUserList(results.users)
    }

    return (
        <div>
            <button onClick={clickHandler}>Refresh User List</button>
            {userList.map((user, index) => {return (
                <h2
                key={index}
                >
                    {user}
                </h2>
            )})}
        </div>
    )
}
export default ListUsers