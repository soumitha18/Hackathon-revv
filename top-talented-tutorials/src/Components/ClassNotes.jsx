import React from "react"
import data from "../Json/class.json"
import style from "./style/style.module.css"
import { Link } from "react-router-dom"

function ClassNotes() {
    return (
        <div style={{ marginTop: "5%" }}>
            {
                data && data.map(item => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <div className={style.linkDiv}>
                            <Link to={`/classnotes/${item.id}/${item.subjects[0].id}`}><small>{item.subjects[0].name}</small></Link><br />
                            <Link to={`/classnotes/${item.id}/${item.subjects[1].id}`}><small>{item.subjects[1].name}</small></Link><br />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ClassNotes