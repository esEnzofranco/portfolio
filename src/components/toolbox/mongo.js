import React from "react";
import '../../styles/toolbox/mongo.css';
import mongoImg from '../../images/toolbox/mongodb.png';

const Mongo = () => {

    const handleMouseOver = () => {
        const mongoImg = document.querySelector('.mongo-img');
        const mongoContainer = document.querySelector('.mongo');
        if (mongoImg.classList.contains('mongo-disappear')) {
            mongoImg.classList.remove('mongo-disappear');
        }
            mongoImg.classList.add('mongo-appear');        
            mongoContainer.style.height = '100px'; 
    }

    const handleMouseOut = () => {
        const mongoImg = document.querySelector('.mongo-img');
        const mongoContainer = document.querySelector('.mongo');
        mongoImg.classList.remove('mongo-appear');
        mongoImg.classList.add('mongo-disappear');
        mongoContainer.style.height = 'auto'; 
    }

    return(
        <div className="mongo" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <p>MongoDB</p>
            <img className="mongo-img" src={mongoImg} alt="mongoDB" />
        </div>
    )
}

export default Mongo;