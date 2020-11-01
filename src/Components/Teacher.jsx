import React from "react"
import style from "./style/style.module.css"

export default function Teachers() {
    return (
        <React.Fragment>
            <div style={{ marginTop: "3.2%" }}>
                <div>
                    <img src="https://via.placeholder.com/1000x300" alt="ha" width="100%" />
                </div>
                <div style={{ background: "whitesmoke" }} className={style.store}>
                    <div>
                        <div>
                            <img className={style.teacher} src="https://www.masaischool.com/static/team/nrupul.jpeg" alt="1" />
                        </div>
                        <div style={{paddingTop: "5%"}}>
                            <h2>Nrupul Dev</h2>
                            <p>Teachers for English</p>
                            <h5>Book Your Calendly Here</h5>
                            <button className={style.calendly}>Calendly</button>
                        </div>
                    </div>
                </div>
                <div className={style.store}>
                    <div>
                        <div style={{paddingTop: "5%"}}>
                            <h2>Albert</h2>
                            <p>Teachers for English</p>
                            <h5>Book Your Calendly Here</h5>
                            <button className={style.calendly}>Calendly</button>
                        </div>
                        <div>
                            <img className={style.teacher} src="https://www.masaischool.com/static/team/albert.jpeg" alt="2" />
                        </div>
                    </div>
                </div>
                <div style={{ background: "whitesmoke" }} className={style.store}>
                    <div>
                        <div>
                            <img className={style.teacher} src="https://www.masaischool.com/static/team/aman.jpg" alt="3" />
                        </div>
                        <div style={{paddingTop: "5%"}}>
                            <h2>Aman</h2>
                            <p>Teachers for English</p>
                            <h5>Book Your Calendly Here</h5>
                            <button className={style.calendly}>Calendly</button>
                        </div>
                    </div>
                </div>
                <div className={style.store}>
                    <div>
                        <div style={{paddingTop: "5%"}}>
                            <h2>Ayush</h2>
                            <p>Teachers for English</p>
                            <h5>Book Your Calendly Here</h5>
                            <button className={style.calendly}>Calendly</button>
                        </div>
                        <div>
                            <img className={style.teacher} src="https://www.masaischool.com/static/team/ayush.jpeg" alt="4" />
                        </div>
                    </div>
                </div>
                <div style={{ background: "whitesmoke" }} className={style.store}>
                    <div>
                        <div>
                            <img className={style.teacher} src="https://www.masaischool.com/static/team/yogesh.jpeg" alt="5" />
                        </div>
                        <div style={{paddingTop: "5%"}}>
                            <h2>Yogesh</h2>
                            <p>Teachers for English</p>
                            <h5>Book Your Calendly Here</h5>
                            <button className={style.calendly}>Calendly</button>
                        </div>
                    </div>
                </div>
                <div className={style.store}>
                    <div>
                        <div style={{paddingTop: "5%"}}>
                            <h2>Santhisri</h2>
                            <p>Teachers for English</p>
                            <h5>Book Your Calendly Here</h5>
                            <button className={style.calendly}>Calendly</button>
                        </div>
                        <div>
                            <img className={style.teacher} src="https://www.masaischool.com/static/team/santhisri.jpeg" alt="4" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}