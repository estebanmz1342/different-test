import React from 'react';
import "./style.css";
import background from "../../resources/8/iceWall.jpeg";
import man from "../../resources/8/man1.jpg";
import man2 from "../../resources/8/man2.jpg";
import man3 from "../../resources/8/man3.jpg";
import woman from "../../resources/8/woman.jpg";
import woman2 from "../../resources/8/woman2.jpg";
import arrow from "../../resources/8/whiteArrow.png";

const CompanionComponent = () => {
    return (
        <div className="component-container"><img className="whitearrow" src={arrow} alt="whitearrow"/>
            <div className="background"><img src={background} alt="iceWall"/>
                <div className="cta-content">
                    <h1 className="cta-title openSans">Helsinki.</h1>
                    <p className="cta-text sansPro ">Finland's southern capital sits on a peninsula in the Gulf of Finland.</p>
                </div>
            </div>
            <div className="companions">
                <h3 className="openSans">Companions</h3>
                <div className="profiles">
                    <div className="profile-item"><img src={man} alt="profile-pic1"/></div>
                    <div className="profile-item"><img src={woman} alt="profile-pic2"/></div>
                    <div className="profile-item"><img src={man2} alt="profile-pic3"/></div>
                    <div className="profile-item"><img src={man3} alt="profile-pic4"/></div>
                    <div className="profile-item"><img src={woman2} alt="profile-pic5"/></div>
                </div>
                <button className="sansPro" type="submit"><span>+</span> Add New Companion</button>
            </div>
        </div>
    )

}

export default CompanionComponent;