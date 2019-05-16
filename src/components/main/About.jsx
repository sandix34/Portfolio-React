import React, { Component } from 'react';

// photo
import myPhoto from '../../img/myPhoto.jpg';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className="about d-flex flex-column align-items-center mr-5 p-5 " id="about">
				<h2 className="p-5">A propos de moi</h2>
				<div className="p-5">
					<img src={myPhoto} alt="photo" className="img-thumbnail rounded-circle"></img>
				</div>
				<p className=" col-lg-6" >
					Né du désir de créer un site web présentant les traces gps de mes randonnées, je me suis passionnée pour le développement et j'ai entamée ma reconversion fin 2018 en suivant la formation "développeur web" dispensée par l'école O'clock afin d'acquérir les bases. Depuis je me forme sur différentes plateformes en e-learning, notamment à Reactjs. Mon objectif est de rejoindre une équipe afin de monter en compétences et m'épanouir dans mon nouveau métier. Actuellement j'ai comme projet de me former à la pile MERN (MongoDB, ExpressJS, Node.JS et Reactjs) en vue de devenir développeuse Web Full-stack. J'ai également un vif interêt pour le Webmapping.
        </p>
				<a className="btn btn-outline-info"
							href="https://cvdesignr.com/p/5ccee4b83db6d?hl=fr_FR"
							role="button"
							target="_blank"
						>Voir le CV </a>			
			</div>
		);
	}
}

export default About;