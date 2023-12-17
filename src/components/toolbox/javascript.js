import React from "react";
import '../../styles/toolbox/javascript.css';
import jsBackground from '../../images/toolbox/js-background.png';
import js from '../../images/toolbox/js.png';

const Javascript = () => {

    const handleMouseOver = () => {
        const background = document.querySelector('.js-background');
        const js = document.querySelector('.js');
        const jsContainer = document.querySelector('.js-container');
        if(background.classList.contains('getLogoOff') && js.classList.contains('getLogoOff')) {
            background.classList.remove('getLogoOff');
            js.classList.remove('getLogoOff');
        }
        background.classList.add('backgroundRise')
        js.classList.add('jsRise')
        jsContainer.style.height = '100px';
    }

    const handleMouseOut = () => {
        const background = document.querySelector('.js-background');
        const js = document.querySelector('.js');
        const jsContainer = document.querySelector('.js-container')
        background.classList.remove('backgroundRise');
        js.classList.remove('jsRise');
        background.classList.add('getLogoOff');
        js.classList.add('getLogoOff');
        jsContainer.style.height = 'auto';
    }

    return(
        <div className="js-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <p>Javascript</p>
            <img className="js-background" src={jsBackground} alt="js" />
            <img className="js" src={js} alt="js" />
        </div>
    )
}

export default Javascript;