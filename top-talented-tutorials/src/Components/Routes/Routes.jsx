import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "../Home"
import Subjects from "../Subjects"
import ClassNotes from "../ClassNotes"
import Account from "../Account"
import Teachers from "../Teacher"

function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/classnotes" exact component={ClassNotes} />
                <Route path="/classnotes/:classId/:subjectId" component={Subjects} />
                <Route path="/account" component={Account} />
                <Route path="/teachers" component={Teachers} />
            </Switch>
        </div>
    )
}

export default Routes