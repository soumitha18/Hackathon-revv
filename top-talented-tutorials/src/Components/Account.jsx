import React, { useState, useContext } from "react"
import { AuthContext } from "../Context/ContextProvider"
import style from "./style/style.module.css"

function Account() {

    const context = useContext(AuthContext)
    const { login, loginUser, registration } = context
    console.log(loginUser)
    const [request, setRequest] = useState(false)
    const [payment, setPayment] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [Num, setNum] = useState(1)

    const handleRegister = () => {
        const obj = {
            name,
            email,
            mobile,
            class: Number(Num)
        }
        registration(obj)
    }

    const handleRequest = () => {
        const obj = {
            name,
            email,
            mobile
        }
        console.log(obj)
    }

    return (
        login ?
            <div style={{ marginTop: "5%" }}>
                <div className={style.account}>
                    <div style={{ width: "30%" }}>
                        <img src="https://via.placeholder.com/200x200" alt="user" style={{ borderRadius: "100px" }} />
                    </div>
                    <div style={{ width: "60%", marginLeft: "10%", paddingTop: "3%" }}>
                        <h1>{loginUser.name}</h1>
                        <h5>{loginUser.email}</h5>
                        <h5>{loginUser.mobile}</h5>
                    </div>
                </div>
            </div>
            :
            request ?
                <div style={{ marginTop: "5%" }}>
                    <div>
                        <input type="text" placeholder="Enter the Name" value={name} onChange={e => setName(e.target.value)} />
                        <input type="text" placeholder="Enter the Name" value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="text" placeholder="Enter the Name" value={mobile} onChange={e => setMobile(e.target.value)} />
                        <button onClick={handleRequest}>Request the Call</button>
                    </div>
                </div>
                :
                payment ?
                    <div style={{ marginTop: "5%" }}>
                        <div>
                            <input type="text" placeholder="Enter the Name" value={name} onChange={e => setName(e.target.value)} />
                            <input type="text" placeholder="Enter the Name" value={email} onChange={e => setEmail(e.target.value)} />
                            <input type="text" placeholder="Enter the Name" value={mobile} onChange={e => setMobile(e.target.value)} />
                            <select onChange={e => setNum(e.target.value)} >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button onClick={handleRegister} >Confirm</button>
                        </div>
                    </div>
                    :
                    <div style={{ marginTop: "5%" }} className={style.twoBtn}>
                        <button onClick={() => setRequest(true)}>Call Request</button>
                        <button onClick={() => setPayment(true)}>Join as Student</button>
                    </div>
    )
}

export default Account