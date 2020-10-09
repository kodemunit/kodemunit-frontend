import React from "react"
import {NavLink, Link} from "react-router-dom"

import logo from "../assets/images/logo.png"

const NavBar = () => {
  return <header className="header">
      <div className="container">
          <Link className="logo" to="/">
              <img src={logo} alt="Kodemunit Logo"/>
          </Link>
          <nav>
            <div className="close">
                <span></span>
            </div>
            <ul className="navigation-links">
                <li>
                    <NavLink exact={true} to="/work-showcase" className="link">
                        Work
                    </NavLink>
                </li>
                <li>
                    <NavLink exact={true} to="/about" className="link">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink exact={true} to="/our-services" className="link">
                        Services
                    </NavLink>
                </li>
            </ul>
            <ul className="important-links">
                <li>
                    <NavLink exact={true} to="/contact" className="link">
                        Contact Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="btn btn-primary" activeClassName="btn btn-primary active-btn">
                        Products
                    </NavLink>
                </li>
            </ul>
          </nav>
          <div className="burger">
              <span></span>
          </div>
      </div>
  </header>
}

export default NavBar
