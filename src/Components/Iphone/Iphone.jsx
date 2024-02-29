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
        <div className="iphone">
            <div className="iphone-screen">
                {/* Screen Here */}
                <NavBar iphone={true}/>
                <img src="./Assets/PNG/IphoneProfileImage.png" alt="Iphone Profile"/>
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
            <div className="iphone-top">
                <p className="carrier">
                    verizon
                </p>
                <div className="black-rim">
                    <span className="camera"></span>
                    <span className="speaker"></span>
                </div>
                <div className="info">
                    <span className="signal"><FaSignal/></span>
                    <span className="power"><FaBatteryHalf/></span>
                    <span className="volume"><FaWifi/></span>
                </div>
                
            </div>
        </div>
    );
}

export default Iphone;