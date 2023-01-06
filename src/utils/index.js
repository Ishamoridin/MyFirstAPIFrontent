import { writeCookie } from "../common";
export const register = async(bodyContent) => {
    try {
        const response = await fetch("http://localhost:5001/createUser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'referrerPolicy': 'origin'
            },
            body: JSON.stringify(bodyContent),
          });
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
};

export const readUsers = async() => {
    try {
        const response = await fetch("http://localhost:5001/readUsers", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'referrerPolicy': 'origin'
            },
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
};

export const loginUser = async(user, setter) => {
    try {
        const response = await fetch("http://localhost:5001/loginUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'referrerPolicy': 'origin'
            },
            body: JSON.stringify(user)
        });
        const data = await response.json();
        console.log(data)
        setter(data.username)
        writeCookie("jwt_token", data.token, 7)
    } catch (error) {
        console.log(error)
    }
}

export const authCheck = async(cookieValue) => {
    try {
        const response = await fetch("http://localhost:5001/authCheck", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookieValue}`
            }
        })
        const data = await response.json()
        console.log(data)
        return data.username
    } catch (error) {
        console.log(error)
    }
}


