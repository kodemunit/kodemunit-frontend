import React from 'react'
import {Link} from "react-router-dom"
// import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube} from "react-icons/all"

// logo b/w
import logo from "../assets/images/bw-logo.png"

const Footer = ({quote, author}) => {
    return (
        <footer>
                <section className="quotes">

                </section>
                <section className="social-media">
                    <div className="container">
                        {/* <h2>Follow Us On</h2> */}
                    </div>
                </section>
                <section className="links">
                    <div className="container">
                    {/* <img src={logo} alt="Kodeminut Logo"/> */}
                    {/* <nav>
                        <ul>
                            <li>
                                <Link to="/work-showcase">Work</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/our-services">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                        </ul>
                    </nav> */}
                    </div>
                </section>
                <section className="copy-right">
                    <div className="container">
                <span>Copyright &copy; - 2020 Kodemunit.</span>
                </div>
                </section>
        </footer>
    )
}

export default Footer
