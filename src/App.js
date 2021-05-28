import React from 'react';
import './App.css';
import SocialComponent from "./components/SocialComponent";
import CompanionComponent from "./components/CompanionComponent";
import CourseComponent from "./components/CourseComponent";

const App = () => {
    return (
        <>
            <div className="container">
                <SocialComponent />
                <CompanionComponent />
                <CourseComponent />
            </div>

        </>
    );
}

export default App;
