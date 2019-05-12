// React
import React, { Component } from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Personnal components
import Navigation from './Navigation';


class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className="header">
				<Navigation />
				<div className="img d-flex flex-column justify-content-center ">
					<h1 className="title mb-5"> <span className="symbol">&lt;</span> Sandrine ZOCCA <span className="symbol">&#47; &gt;</span></h1>
					<h2 className="sub-title"> <span className="symbol">&#123;</span> Développeuse Web Front End <span className="symbol">&#125;</span></h2>
					<h3>Spécialisation React.</h3>
					<hr/>
					<a href="https://github.com/sandix34" target="_blank"><FontAwesomeIcon className="social" icon={faGithub} size="3x" color="white" /></a>
			</div>
			</div >
		);
	}
}

export default Header;