import React from "react";
import '../../styles/toolbox/css.css';
import css from '../../images/toolbox/css.png';
import cssTitle from '../../images/toolbox/css-title.png';

const Css = () => {

    const handleMouseOver = () => {
        const cssImg = document.querySelector('.css-img');
        const cssTitle = document.querySelector('.css-title');
        if (cssImg.classList.contains('invisible')) {
            cssImg.classList.remove('invisible');
            cssTitle.classList.remove('invisible');
        }
        cssImg.classList.add('visible');
        cssTitle.classList.add('title-visible');
    }

    const handleMouseOut = () => {
        const cssImg = document.querySelector('.css-img');
        const cssTitle = document.querySelector('.css-title');
        cssImg.classList.remove('visible');
        cssTitle.classList.remove('title-visible');
        cssImg.classList.add('invisible');
        cssTitle.classList.add('invisible');
        
    }

    return (
        <div className="css-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <p>Css 3</p>
            <img className="css-title" src={cssTitle} alt="css" />
            <img className="css-img" src={css} alt="css" />
        </div>
    )
}

export default Css;