import React from "react"
import { Link } from "react-router-dom"
import data from "../Json/random.json"

export default function Home() {
    return (
        <div style={{marginTop:"5%"}}>
            {
                data && data.map(item =>
                    <div key={item.id}>
                        <Link to={`/classnotes/${item.id}/${item.subjectId}`}>
                            <div>
                                <img src="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg" width="100px" alt="note1" />
                            </div>
                            <div>
                                <h1>{item.name}</h1>
                                <p><small>Class {item.id}</small></p>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}