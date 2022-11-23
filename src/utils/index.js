export const register = async () => {
    try {
        const response = await fetch( /* ADD REGISTER ENDPOINT HERE */{
            headers: {"Content-Type": "application/json"},
            body: {
                // "username": 
                // "email": 
                // "password": 
            }
        });
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


