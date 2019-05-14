import React, { Component } from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// SKILL BARS
import SkillBar from 'react-skillbars';
import SKILLS from './listSkills';

// photo
import codeur from '../../img/codeur.png';

// PERSONNAL COMPONENTS
import Formation from './Formation';
import About from './About';
import Projets from './Projets';

//colors skills bars
const colors = {
	"bar": "#4daac4",
	"title": {
		"text": "#fff",
		"background": "#5495c8"
	}
}



class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<main className="main  ">
				<About />
				{/*SECTION FORMATION */}
				<section className="formation row no-gutters" >
					{/* FORMATIONS */}
					<div className="parcours col-lg-6 p-5">
						<h2 className="text-center p-5">Formations</h2>
						<Formation />
					</div>
					{/*COMPETENCES */}
					<div className=" col-lg-6 p-5">
						<h2 className="text-center p-5">Compétences</h2>
						<div className="pb-5">
							<img src={codeur} alt="" className="img-thumbnail" />
						</div>
						<SkillBar skills={SKILLS} colors={colors} />
						<a class="btn btn-outline-light btn-block "
							href="https://github.com/sandix34/Mon-traqueur-d-apprentissage"
							role="button"
							target="_blank"
						>Voir mon journal complet de compétences <FontAwesomeIcon className="social" icon={faGithub} color="#4daac4" /></a>
						<h2 className="text-center p-5">Ambitions</h2>
						<p className="p-5">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iure recusandae vero beatae. Cumque officiis enim explicabo consequuntur ullam ad deleniti, iure dolores, reprehenderit in animi ipsam repellendus harum provident!
						 </p>
					</div>
				</section>
				<section >
					<h2 className="text-center p-5">Ce que je fais</h2>
					<Projets />
				</section>
			</main>
		);
	}
}

export default Main;