import React from "react";
import { Link } from "react-router-dom";
import './Iphone.css';
import NavBar from '../Iphone/IphoneNavBar/IphoneNav';


import { FaSignal } from "react-icons/fa6";
import { FaBatteryHalf } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";


const Iphone = () => {
    return (
        <div class="iphone">
            <div class="iphone-screen">
                {/* Screen Here */}
                <NavBar iphone={true}/>
                <img src="https://via.placeholder.com/100" alt="Iphone Profile"/>
                <p className="name">Anthony Dampier</p>
                <div className="link-tree">
                    <a>GitHub Profile</a>
                    <Link to="/projects" className="nav-links">
                            Project
                    </Link>
                    <a>LinkedIn</a>
                    <a>ProvenPath Blog</a>
                </div>
                <div className="links">
                    <div>
                        <a>LinkedIn</a>
                        <a>GitHub</a>
                        <a>Resources</a>
                    </div>
                    <hr/>
                </div>
                
            </div>
            <div class="iphone-top">
                <p className="carrier">
                    verizon
                </p>
                <div className="black-rim">
                    <span class="camera"></span>
                    <span class="speaker"></span>
                </div>
                <div className="info">
                    <span class="signal"><FaSignal/></span>
                    <span class="power"><FaBatteryHalf/></span>
                    <span class="volume"><FaWifi/></span>
                </div>
                
            </div>
        </div>
    );
}

export default Iphone;