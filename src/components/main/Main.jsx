import React, { Component } from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// SKILL BARS
import SkillBar from 'react-skillbars';
import SKILLS from './listSkills';

// illustration
import codeur from '../../img/codeur.png';

//liste des projets
import projets from './listProjets';
import projetsPerso from './listProjetsPersos';

// PERSONNAL COMPONENTS
import Formation from './Formation';
import About from './About';
import Card from './card';

// scroll up button
import ScrollUpButton from "react-scroll-up-button";

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
		this.state = {
			projets: projets,
			projetsPerso: projetsPerso
		}
	}

	render() {

		//card projets
		const cards = Object.keys(this.state.projets)
			.map(key => <Card key={key} details={this.state.projets[key]}></Card>)

		//card projetsPerso
		const cardsPerso = Object.keys(this.state.projetsPerso)
			.map(key => <Card key={key} details={this.state.projetsPerso[key]}></Card>)



		return (
			<main className="main  ">
				<ScrollUpButton />
				<About />
				{/*SECTION FORMATION */}
				<section className="formation row no-gutters" >
					{/* FORMATIONS */}
					<div className="parcours col-lg-6 p-5">
						<h2 className="text-center p-5">Formations</h2>
						<Formation />
					</div>
					{/*COMPETENCES */}
					<div className=" col-lg-6 p-5" id="competences">
						<h2 className="text-center p-5">Compétences</h2>
						<div className="pb-5">
							<img src={codeur} alt="" className="img-thumbnail" />
						</div>
						<SkillBar skills={SKILLS} colors={colors} />
						<a className="btn btn-outline-light"
							href="https://github.com/sandix34/Mon-traqueur-d-apprentissage"
							role="button"
							target="_blank"
						>Voir mon journal complet de compétences <FontAwesomeIcon className="social" icon={faGithub} color="#4daac4" /></a>
					</div>
				</section>
				{/*SECTION PROJETS */}
				<section id="portfolio" >
					<div>
						<h2 className="text-center p-5">Portfolio d'apprentissage</h2>
						<div className="projets d-flex row justify-content-center ">
							{cards}
						</div>
					</div>
					<div>
						<h2 className="text-center p-5">Ce que je fais</h2>
						<div className="projets d-flex row justify-content-center ">
							{cardsPerso}
						</div>
					</div>
				</section>
			</main>
		);
	}
}

export default Main;