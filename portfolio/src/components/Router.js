import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import AboutMe from '../Pages/AboutMe'
import Projects from '../Pages/Projects'
import Contact from '../Pages/Contact'

const Router = (props) => {
    return (
        <main>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={(props) => <Home {...props} />}
                />
                <Route
                    exact
                    path="/projects"
                    component={(props) => <Projects {...props} />}
                />
                <Route
                    exact
                    path="/about"
                    component={(props) => <AboutMe {...props} />}
                />
                <Route
                    exact
                    path="/contact"
                    component={(props) => <Contact {...props} />}
                />
            </Switch>
        </main>
    )
}

export default Router