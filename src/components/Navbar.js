import React from "react";
import logo from "../logo.png";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
            <Link smooth={true} to="AboutMe" className="nav-link" href="#">About Me <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
            <Link smooth={true} to="Art" className="nav-link" href="#">My Art <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
            <Link smooth={true} to="Projects" className="nav-link" href="#">My Projects <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
            <Link smooth={true} to="Resume" className="nav-link" href="#">Resume<span className="sr-only"></span></Link>
            </li>

            <li className="nav-item">
            <Link smooth={true} to="Apps" className="nav-link" href="#">My Apps <span className="sr-only"></span></Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">contacts</a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar