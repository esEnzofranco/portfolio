import React from "react";
import '../../styles/toolbox/node.css';
import nodeImg from '../../images/toolbox/node.png';
import nodeO from '../../images/toolbox/node-o.png';

const Node = () => {

    const handleMouseOver = () => {
        const node = document.querySelector('.node-img');
        const nodeO = document.querySelector('.node-o');
        const nodeContainer = document.querySelector('.node-container');
        if (node.classList.contains('node-disappear')) {
            node.classList.remove('node-disappear');
            nodeO.classList.remove('node-disappear');
        };
        node.classList.add('node-transform');
        nodeO.classList.add('node-o-transform');
        nodeContainer.style.height = '100px';
    }
    const handleMouseOut = () => {
        const node = document.querySelector('.node-img');
        const nodeO = document.querySelector('.node-o');
        const nodeContainer = document.querySelector('.node-container');
        node.classList.remove('node-transform');
        nodeO.classList.remove('node-o-transform');
        node.classList.add('node-disappear');
        nodeO.classList.add('node-disappear');
        nodeContainer.style.height = 'auto';
    }

    return(
        <div className="node-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <p>Node.js</p>
            <img className="node-img" src={nodeImg} alt="node" />
            <img className="node-o" src={nodeO} alt="node" />
        </div>
    )
}

export default Node;