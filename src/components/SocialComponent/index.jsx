import React from 'react';
import "./style.css"
import house from "../../resources/7/house.jpg";
import book from "../../resources/7/book.png";
import save from "../../resources/7/save.png";
import add from "../../resources/7/addButton.png";
import user from "../../resources/7/user.png";
import inbox from "../../resources/7/inbox.png";
import chat from "../../resources/7/chatbubble.png"
import picProfile from "../../resources/7/pic-profile.jpg";
import eye from "../../resources/7/eye.png";

const SocialComponent = () => {
    return (
        <div className="component-container">
            <nav className="nav">
                <div className="nav-option bold">Popular<div className="dot"></div></div>
                <div className="nav-option">Bookmarked</div>
                <div className="nav-option">Oldest</div>
            </nav>
            <div className="social-profile">
                <div className="profile-image">
                    <img src={picProfile} alt="profile-pic"/>
                </div>
                <div className="profile-info">
                    <p className="name sansPro bold">Lars Hünderson</p>
                    <p className="time sansPro">10 min ago</p>
                </div>
                <div className="chat"><img src={chat} alt="bubble-chat"/><span
                    className="chat-number sansPro">28</span></div>
            </div>
            <div className="social-content">
                <div className="content-image"><img src={house} alt="house"/><img className="eye" src={eye} alt="eye"/></div>
                <div className="content-text">
                    <p className="sansPro">Further routine is established by assigning each journalist to beat; a domain of...</p>
                    <p className="sansPro bold">Read Article...</p>
                </div>
            </div>
            <div className="bottom-menu">
                <div className="bottom-menu-option"><img src={book} alt="booking"/></div>
                <div className="bottom-menu-option"><img src={save} alt="saved"/></div>
                <div className="bottom-menu-option"><img src={add} alt="add"/></div>
                <div className="bottom-menu-option"><img src={user} alt="user-profile"/></div>
                <div className="bottom-menu-option"><img src={inbox} alt="inbox"/></div>
            </div>

        </div>
    )

}

export default SocialComponent;