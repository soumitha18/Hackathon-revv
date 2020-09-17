import React, { useContext } from "react"
import data from "../Json/class.json"
import { useParams, useHistory } from "react-router-dom"
import { AuthContext } from "../Context/ContextProvider"
import style from "./style/style.module.css"

function Subjects(props) {
    const params = useParams()
    const classNote = data.find(item => item.id === params.classId)
    const subject = classNote["subjects"].find(item => item.id === params.subjectId)
    const context = useContext(AuthContext)
    const { login } = context
    const history = useHistory()

    const handleClick = () => {
        if (login) {
            window.open(subject.parma, "_blank")
        }
        else {
            history.push("/account")
        }
    }

    return (
        <div style={{ width: "50%", marginLeft: "25%", display: "flex", flexDirection: "row", marginTop: "5%", textAlign: "center" }}>
            <div style={{ width: "50%" }}>
                <img src={subject.avatar} width="100%" alt="1" />
            </div>
            <div style={{ width: "50%", paddingTop: "10%" }}>
                <h4>Class {params.classId}</h4>
                <h2>{subject.name}</h2>
                <button className={style.parma} onClick={() => handleClick()}>Parma Link</button>
            </div>
        </div>
    )
}

export default Subjects