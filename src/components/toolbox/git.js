import React from "react";
import '../../styles/toolbox/git.css';
import git from '../../images/toolbox/git.png';
import gitHub from '../../images/toolbox/github.png'

const Git = () => {

    const handleMouseOver = () => {
        const gitImg = document.querySelector('.git');
        const gitHubImg = document.querySelector('.github');
        const gitContainer = document.querySelector('.git-container');
        if (gitImg.classList.contains('git-down')) {
            gitImg.classList.remove('git-down');
            gitHubImg.classList.remove('github-down');
        }
        gitImg.classList.add('git-up');
        gitHubImg.classList.add('github-up');
        gitContainer.style.height = '100px'
    }

    const handleMouseOut = () => {
        const gitImg = document.querySelector('.git');
        const gitHubImg = document.querySelector('.github');
        const gitContainer = document.querySelector('.git-container');
        gitImg.classList.remove('git-up');
        gitHubImg.classList.remove('github-up')
        gitImg.classList.add('git-down');
        gitHubImg.classList.add('github-down');
        gitContainer.style.height = 'auto';
    }

    return(
        <div className="git-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <p>Git / Github</p>
            <div className="img-container">
                <img className="git-img git" src={git} alt="git" />
                <img className="git-img github" src={gitHub} alt="git" />
            </div>
            
        </div>
    )
}

export default Git;