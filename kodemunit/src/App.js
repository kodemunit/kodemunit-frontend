import React from "react"
import { Switch, Route } from "react-router-dom"

// pages
import Home from "./landing-page/"

// components
import NavBar from "./components/NavBar"

// styles
import "./styles/style.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <h1>Hello World, Welcome To Kodemunit</h1>
      </div>
      {/* <Switch>
        <Route exact path="/" component={Home} />
      </Switch> */}
    </div>
  )
}

export default App
