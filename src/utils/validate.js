export const checkValidData = (isSignForm, username, email, password) => {
    const isUsernameValid = isSignForm ? true : /^[a-zA-Z0-9._-]{3,20}$/.test(username)
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const ispasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    
    if(!isUsernameValid){
        return "Username is not valid."
    }

    if(!isEmailValid){
        return "Email ID is not valid."
    }

    if(!ispasswordValid){
        return "Password is not valid."
    }

    return null
}