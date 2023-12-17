import React from "react";
import '../../styles/toolbox/npm.css';
import n from '../../images/toolbox/n.png';
import p from '../../images/toolbox/p.png';
import m from '../../images/toolbox/m.png';

const Npm = () => {

    const handleMouseOver = () => {
        const npmContainer = document.querySelector('.npm-container');
        const n = document.querySelector('.n');
        const p = document.querySelector('.p');
        const m = document.querySelector('.m');
        if (n.classList.contains('n-disappear')) {
            n.classList.remove('n-disappear');
            p.classList.remove('p-disappear');
            m.classList.remove('m-disappear');
        }
        n.classList.add('n-appear');
        p.classList.add('p-appear');
        m.classList.add('m-appear');
        npmContainer.style.height = '100px';
    }
    const handleMouseOut = () => {
        const npmContainer = document.querySelector('.npm-container');
        const n = document.querySelector('.n');
        const p = document.querySelector('.p');
        const m = document.querySelector('.m');
        n.classList.remove('n-appear');
        p.classList.remove('p-appear');
        m.classList.remove('m-appear');
        n.classList.add('n-disappear');
        p.classList.add('p-disappear');
        m.classList.add('m-disappear');
        npmContainer.style.height = 'auto';
    }

    return(
        <div className="npm-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <p>Node Package Manager</p>
            <div className="npm">
                <img className="n" src={n} alt="npm" />
                <img className="p" src={p} alt="npm" />
                <img className="m" src={m} alt="npm" />
            </div>
        </div>
    )
}

export default Npm;