// React
import React, { Component } from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className="header ">
				<div className="img flex-column d-flex ">
					<h1 className="title mb-5"><span className="symbol">&lt;</span> Sandrine ZOCCA <span className="symbol">&#47; &gt;</span></h1>
					<h2 className="sub-title"> <span className="symbol">&#123;</span> Développeuse Web Junior <span className="symbol">&#125;</span></h2>
					{/*<div className="d-flex justify-content-center">
						<span className="icons" ><FontAwesomeIcon icon={faHtml5} size="3x" color="#df4b25" /></span>
						<span className="icons" ><FontAwesomeIcon icon={faCss3} size="3x" color="#3695cf" /></span>
						<span className="icons" ><FontAwesomeIcon icon={faJs} size="3x" color="#f8e017" /></span>
						<span className="icons" ><FontAwesomeIcon icon={faReact} size="3x" color="#60dafb" /></span>
					</div>*/}
					<AnchorLink href='#about'>
						<FontAwesomeIcon className="arrow" icon={faArrowCircleDown} size="4x" color="#899ca2" />
					</AnchorLink>



				</div>
			</div >
		);
	}
}

export default Header;