import { useState } from "react";
import "./Navbar.css";

export default function Navbar () {
    const [openMenu, setOpenMenu] = useState (false)

    return (
        <nav className="navbar">
                <div className="nav-container">
                    <img src="ss_logo.png"/>
                    <button className="btn-menu" onClick={() => setOpenMenu(!openMenu)}> {openMenu ? "✕" : "☰"} </button>


                <ul className= {openMenu ? "nav-link active" : "nav-link"}>
                    <li><a href="#home"> Home </a></li>
                    <li><a href="#services"> Services </a></li>
                    {/* <li><a href="#clients"> Clients </a></li> */}
                    <li><a href="#hardware"> Hardware </a></li>
                    <li><a href="#plan"> AMC Plans </a></li>
                    <li><a href="#whyUs"> Why Us ? </a></li>
                    <li><a href="#process"> Process </a></li>
                    <li><a href="#industries"> Industries </a></li>
                    <li><a href="#contact"> Contact Us </a></li>
                </ul>
                </div>
        </nav>
    )
}