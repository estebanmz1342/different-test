import React from 'react';
import "./style.css";
import saved from "../../resources/9/saved.png";
import cart from "../../resources/9/cart.png";
import add from "../../resources/9/add.png";
import star from "../../resources/9/star.png";
import star2 from "../../resources/9/star2.png";
import star3 from "../../resources/9/star3.png";
import search from "../../resources/9/search.png";
import image1 from "../../resources/9/image.jpg";


const CourseComponent = () => {
    return (
        <div className="component-container"><img className="search" src={search} alt="search"/>
            <div className="input-content">
                <input type="text" placeholder="Search for a course"/>
            </div>
            <div className="button-container">
                <div className="action-button sansPro">
                    <div className="button"><img src={saved} alt=""/></div>Bookmark
                </div>
                <div className="action-button sansPro">
                    <div className="button"><img src={add} alt=""/></div>Add Course
                </div>
                <div className="action-button sansPro">
                    <div className="button"><img src={star} alt=""/></div>Rate it
                </div>
                <div className="action-button sansPro">
                    <div className="button"><img src={cart} alt=""/></div>Add to cart
                </div>
            </div>

            <div className="illustration">
                <img src={image1} alt="illstration image"/>
            </div>
            <div className="offer">
                <div className="left-side">
                    <div className="offer-name sansPro">Learning UI Design</div>
                    <div className="calification">
                        <img src={star2} alt="star"/>
                        <img src={star2} alt="star"/>
                        <img src={star2} alt="star"/>
                        <img src={star2} alt="star"/>
                        <img src={star3} alt="star"/>
                    </div>
                </div>
                <div className="right-side rubik">$24.99</div>
            </div>
        </div>
    )

}

export default CourseComponent;