import { React } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GithubLink = () => {
    const githubUrl = "https://github.com/";

    return (
        <FontAwesomeIcon icon={faGithub} />
    );
}

export default GithubLink;