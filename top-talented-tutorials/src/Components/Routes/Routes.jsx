import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "../Home"
import Subjects from "../Subjects"
import ClassNotes from "../ClassNotes"

function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/classnotes" exact component={ClassNotes} />
                <Route path="/classnotes/:classId/:subjectId" component={Subjects} />
            </Switch>
        </div>
    )
}

export default Routes