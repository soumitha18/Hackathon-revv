import React, { useState } from "react"


export const AuthContext = React.createContext()

function ContextProvider (props) {

    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)
    const [loginUser, setLoginUser] = useState([])
    const [registerUser, setRegisterUser] = useState([])

    const registration = (data) => {
        setRegisterUser([...registerUser, data])
        setRegister(true)
        setLogin(true)
        setLoginUser(data)
    }

    return (
        <AuthContext.Provider value={{login, register, loginUser, registerUser, registration }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default ContextProvider