import React from "react";
import '../../styles/projects/projects.css'
import Project from "./project";
import website from '../../images/projects/website.jpg'

const Projects = () => {
    return (
        <div className="projects">
            <p className="projects-title">My Projects</p>
            <div className="projects-container">
                <Project title='Movies Package' img={website} description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
                <Project title='Pbo search' img={website} description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
                <Project title='Trivia Challenge' img={website} description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
            </div>
        </div>
    )
}

export default Projects;