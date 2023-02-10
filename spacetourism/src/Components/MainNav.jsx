import React from "react";
import "./MainNav.css";

function MainNav(){
    return(
        <div className="container">
            <div className="navbar">

                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>   
                </div>

                <div className="navLinksDiv">
                    <ul className="navList">
                        <li className="home"><span>00</span>HOME</li>
                        <li className="home"><span>01</span>DESTINATION</li>
                        <li className="home"><span>02</span>CREW</li>
                        <li className="home"><span>03</span>TECHNOLOGY</li>
                    </ul>
                </div>
            </div>

            <div className="destination">
                <p className="pickDest"><span className="pickDestSpan">01</span> PICK YOUR DESTINATION</p>
            </div>
        </div>
    )
}

export default MainNav;