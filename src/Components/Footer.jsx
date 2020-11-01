import React from "react"
import style from "./style/style.module.css"

export default function Footer() {
    return (
        <React.Fragment>
            <div style={{ marginTop: "5%" }} className={style.foot} >
                <div>
                    <small>Enter your email to stay in touch!</small><br />
                    <input type="text" /> <button>SIGN UP</button>
                    <div className={style.foot1}>
                        <div>
                            <h5>HELP</h5>
                            <p>1-888-963-8944</p>
                            <p>1-814-251-9966 (Text)</p>
                            <p>help@allbirds.com</p>
                            <p>Returns/Exchanges</p>
                            <p>FAQ/Contact Us</p>
                        </div>
                        <div>
                            <h5>Classes</h5>
                            <p>class 2</p>
                            <p>class 2</p>
                            <p>class 3</p>
                            <p>class 4</p>
                            <p>class 5</p>
                        </div>
                        <div>
                            <h5>Teachers</h5>
                            <p>Nrupul</p>
                            <p>Albert</p>
                            <p>Prateek</p>
                            <p>Yogesh</p>
                            <p>Aman</p>
                            <p>Ayush</p>
                            <p>Mahesh</p>
                            <p>Santhi</p>
                        </div>
                    </div>
                    <div>
                        <h1>TOP TALENTED TUTORIALS</h1>
                        <p>TTT is an intensive programme of tuitions designed to stretch and challenge the very best of its student's overall academic development</p>
                    </div>
                    <div style={{ textAlign: "center", marginTop:"5%" }}><small>© 2020 TTT, Inc. All Rights Reserved. Terms, Privacy & Accessibility</small></div>
                </div>
            </div>
        </React.Fragment>
    )
}