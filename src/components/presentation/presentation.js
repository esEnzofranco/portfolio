import React from "react";
import '../../styles/presentation/presentation.css';
import arrow from '../../images/presentation/arrow.png';

const Presentation = () => {
    return (
        <div className="presentation">
                <div className="photo">
                </div>
            <div className="title">
                <div className="title-background">
                    <img className="arrow" src={arrow} alt="" />
                    <p>I'm Enzo,</p>
                </div>
                <div className="title-background">
                    <p>Web developer.</p>
                </div>
            </div>
        </div>
    )
}

export default Presentation;