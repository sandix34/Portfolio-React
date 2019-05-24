// React
import React, { Component } from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className="header " id="accueil">
				<div className="img flex-column d-flex ">
					<h1 className="title mb-5"><span className="symbol">&lt;</span> Je suis Sandrine Zocca <br /> Développeuse Web <span className="symbol">&#47; &gt;</span></h1>
					<h2 className="sub-title"> <span className="symbol">&#123;</span> Les pieds sur terre, le regard vers l'avenir <span className="symbol">&#125;</span></h2>
					<AnchorLink href='#about'>
						<FontAwesomeIcon className="arrow" icon={faArrowCircleDown} size="2x" color="#899ca2" />
					</AnchorLink>
				</div>
			</div >
		);
	}
}

export default Header;