import React from "react";
import '../../styles/toolbox/react-component.css';
import reactLogo from '../../images/toolbox/react-logo.png';

const ReactComponent = () => {
        const handleMouseOver = () => {
            const reactImg = document.querySelector('.react-img');
            const reactContainer = document.querySelector('#react');
            if (reactImg.classList.contains('getOff')) {
                reactImg.classList.remove('getOff');
            }
                reactImg.classList.add('riseAndSpin');        
                reactContainer.style.height = '100px'; 
        }

        const handleMouseOut = () => {
            const reactImg = document.querySelector('.react-img');
            const reactContainer = document.querySelector('#react');
            reactImg.classList.remove('riseAndSpin');
            reactImg.classList.add('getOff');
            reactContainer.style.height = 'auto'; 
        }



    return(
        <div id="react" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img className="react-img" src={reactLogo} alt="react-logo"/>
            <p>React.js</p>
        </div>
    )
}

export default ReactComponent;