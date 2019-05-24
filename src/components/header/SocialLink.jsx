// React
import React from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialLink = () => {
	return (
		<div>
			<a href="https://github.com/sandix34" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon className="social" icon={faGithub} size="2x" color="white" />
			</a>
		</div>
	);
}

export default SocialLink;