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
						<AnchorLink className="nav-item nav-link active" href='#accueil'>
							Accueil
						</AnchorLink>
						<AnchorLink className="nav-item nav-link" href='#about'>
							A propos
						</AnchorLink>
						<AnchorLink className="nav-item nav-link" href='#competences'>
							Compétences
						</AnchorLink>
						<AnchorLink className="nav-item nav-link" href='#portfolio'>
							Portfolio
						</AnchorLink>
						<AnchorLink className="nav-item nav-link" href='#footer'>
							Contact
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