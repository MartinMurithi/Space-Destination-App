import moon from '../Images/moon.png';

import React from "react";
import ("./Main.css");

function Main(){
    return(
        <div className="gridContainer">

            <div className="imgData">
                <img src={moon} alt="" className="moonImg" />
            </div>

            <div className="planetInfo">

                {/* SUB NAV */}
                <div className="subNav">
                    <ul className="subNavList">
                    <li className="moon">MOON</li>
                    <li className="mars">MARS</li>
                    <li className="europa">EUROPA</li>
                    <li className="titan">TITAN</li>
                    </ul>
                </div>

                <div className="planetData">
                    <h1 className="moonTitle">MOON</h1>
                    <p className="moonData">
                    See our planet as you’ve never seen it before. A perfect relaxing trip away to 
                    help regain perspective and come back refreshed. While you’re there, take in 
                    some history by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>

                    <hr/>

                    <div className="footer">
                        <div className="footerTitle">
                            <span className="avgDistTitle">AVG. DISTANCE</span>
                            <span className='durationTitle'>EST. TRAVEL TIME</span>
                        </div>

                        <div className="footerDetails">
                            <span className='duration'>384,400 KM</span>
                            <span className='distance'>3 DAYS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Main;