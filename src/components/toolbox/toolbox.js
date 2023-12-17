import React from "react";
import '../../styles/toolbox/toolbox.css';
import Javascript from './javascript';
import ReactComponent from './react-component';
import Css from './css.js';
import Html from './html.js';
import Git from './git.js';
import Node from './node.js';
import Npm from './npm.js';
import Mysql from "./mysql.js";
import Mongo from "./mongo.js";

const Toolbox = () => {

    return (
        <div className="toolbox-main">
            <p className="toolbox-p">My Toolbox</p>
            <div className="toolbox-back">
            <div className="toolbox">
                <div className="first">
                    <Html />
                    <Css />
                    <Javascript />
                    <ReactComponent />
                    <Git />
                </div>
                <div className="second">
                    <Node />
                    <Npm />
                    <Mysql />
                    <Mongo />
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Toolbox;