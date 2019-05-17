import React, { Component } from 'react';
import SocialLink from './SocialLink';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}



	render() {
		return (
			<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" >
				<button className="navbar-toggler"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent" >
					<div className="navbar-nav mx-auto">
						<AnchorLink href='#accueil'>
							<a className="nav-item nav-link active" href="#">Accueil</a>
						</AnchorLink>
						<AnchorLink href='#about'>
							<a className="nav-item nav-link" href="#about">A propos</a>
						</AnchorLink>
						<AnchorLink href='#competences'>
							<a className="nav-item nav-link" href="#competences">Compétences</a>
						</AnchorLink>
						<AnchorLink href='#portfolio'>
							<a className="nav-item nav-link" href="#portfolio">Portfolio</a>
						</AnchorLink>
						<AnchorLink href='#footer'>
							<a className="nav-item nav-link" href="#footer">Contact</a>
						</AnchorLink>
					</div>
					<div>
						<SocialLink />
					</div>
				</div>
			</nav>

		);
	}
}

export default Navigation;