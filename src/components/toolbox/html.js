import React from "react"; 
import '../../styles/toolbox/html.css';
import html from '../../images/toolbox/html.png';
import htmlTitle from '../../images/toolbox/html-title.png'

const Html = () => {

    const handleMouseOver = () => {
        const htmlImg = document.querySelector('.html-img');
        const htmlTitle = document.querySelector('.html-title');
        if (htmlImg.classList.contains('invisible')) {
            htmlImg.classList.remove('invisible');
            htmlTitle.classList.remove('invisible');
        }
        htmlImg.classList.add('visible');
        htmlTitle.classList.add('title-visible');
    }

    const handleMouseOut = () => {
        const htmlImg = document.querySelector('.html-img');
        const htmlTitle = document.querySelector('.html-title');
        htmlImg.classList.remove('visible');
        htmlTitle.classList.remove('title-visible');
        htmlImg.classList.add('invisible');
        htmlTitle.classList.add('invisible');
        
    }

    return(
        <div className="html-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <p>Html 5</p>
            <img className="html-title" src={htmlTitle} alt="html" />
            <img className="html-img" src={html} alt="html" />
        </div>
    )
}

export default Html;