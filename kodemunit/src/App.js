import React from "react"
import { Switch, Route } from "react-router-dom"

// pages
import Home from "./pages"
import Work from "./pages/Work"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Products from "./pages/products/"
import Error from "./pages/Error"

// components
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import SearchResults from "./components/SearchResults"

// styles
import "./styles/style.sass"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work-showcase" component={Work} />
        <Route exact path="/about" component={About} />
        <Route exact path="/our-services" component={Services} />
        <Route path="/products" component={Products} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer />
      <SearchResults />
    </div>
  )
}

export default App
