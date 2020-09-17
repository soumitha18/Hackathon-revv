import React from "react"
import { Link } from "react-router-dom"
import style from "./style/style.module.css"

export default function Home() {
    return (
        <React.Fragment>
            <div className={style.nav}>
                <div>
                    <Link to="/" style={{fontWeight:"bolder", fontSize:"20px"}}>Top Talented Tutorials</Link>
                </div>
                <div>
                    <Link to="/teachers" >TEACHERS</Link>
                    <Link to="/classnotes" >CLASS NOTES</Link>
                    <Link to="/account" ><img src="https://cdn.allbirds.com/image/upload/v1571355713/icons/user.svg" alt="user" width="" /></Link>
                    <Link to="/faq" ><img src="https://cdn.allbirds.com/image/upload/v1571947807/icons/help.svg" alt="help" width="" /></Link>
                </div>
            </div>
        </React.Fragment>
    )
}