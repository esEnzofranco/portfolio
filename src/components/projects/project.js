import React from "react";
import '../../styles/projects/project.css'

const Project = ({img, title, description}) => {
    return(
        <div className="project">
            <img src={img} className="project-img" alt="" />
            <div className="title-container">
                <strong className="project-title">{title}</strong>
                <p className="project-description">{description}</p>
            </div>
        </div>
    )
}
export default Project;