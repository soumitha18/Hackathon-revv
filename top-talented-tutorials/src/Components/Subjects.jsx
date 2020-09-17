import React from "react"
import data from "../Json/class.json"
import { useParams } from "react-router-dom"

function Subjects(props) {
    const params = useParams()

    const classNote = data.find(item => item.id === params.classId)
    const subject = classNote["subjects"].find(item => item.id === params.subjectId)
    console.log(subject)

    return (
        <div style={{ display: "flex", flexDirection: "row", marginTop: "5%", textAlign: "center" }}>
            <div style={{ width: "50%" }}>
                <img src="https://via.placeholder.com/400" alt="1" />
            </div>
            <div style={{ width: "50%", paddingTop: "7%" }}>
                <h5>Tree Upper</h5>
                <h2>Seamless Durability</h2>
                <p>We knitted a unique one-piece upper made<br /> from FSC® Certified eucalyptus trees for a perfect<br /> fit that’s flexible, lightweight, and breathable <br />in every step..</p>
            </div>
        </div>
    )
}

export default Subjects