export const register = async () => {
    try {
        const response = await fetch( {
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
            })
        });
        const data = await response.json()
        
    } catch (error) {
        console.log(error)
    }
}