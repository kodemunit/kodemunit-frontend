import React, {useState} from "react"
import {NavLink, Link} from "react-router-dom"

import logo from "../assets/images/logo.png"

const NavBar = () => {
    const [isNav, setNav] = useState(false)

    const openNav = () => {
        setNav(true)
        document.body.classList.add("no-scrolling")
    }

    const closeNav = () => {
        setNav(false)
        document.body.classList.remove("no-scrolling")
    }
    

  return <header className="header">
      <div className="container">
          <Link className="logo" to="/">
              <img src={logo} alt="Kodemunit Logo"/>
          </Link>
          <nav className={isNav? "open": ""}>
            <div className="close burger" onClick={closeNav}>
                <span></span>
            </div>
            <ul className="navigation-links">
                <li>
                    <NavLink exact={true} to="/work-showcase" className="link" onClick={closeNav}>
                        Work
                    </NavLink>
                </li>
                <li>
                    <NavLink exact={true} to="/about" className="link" onClick={closeNav}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink exact={true} to="/our-services" className="link" onClick={closeNav}>
                        Services
                    </NavLink>
                </li>
            </ul>
            <ul className="important-links">
                <li>
                    <NavLink exact={true} to="/contact" className="link" onClick={closeNav}>
                        Contact Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="btn btn-primary" activeClassName="btn btn-secondary" onClick={closeNav}>
                        Products
                    </NavLink>
                </li>
            </ul>
          </nav>
          <div className="burger open" onClick={openNav}>
              <span></span>
          </div>
      </div>
  </header>
}

export default NavBar
