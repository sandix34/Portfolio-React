import React, { Component } from 'react';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<button className="navbar-toggler" >
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse">
					<div className="navbar-nav mx-auto">
						<a className="nav-item nav-link active" href="#">Accueil</a>
						<a className="nav-item nav-link" href="#">A propos</a>
						<a className="nav-item nav-link" href="#">Portfolio</a>
						<a className="nav-item nav-link" href="#">Contact</a>
					</div>
				</div>
			</nav>

		);
	}
}

export default Navigation;