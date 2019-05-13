import React, { Component } from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// SKILL BARS
import SkillBar from 'react-skillbars';
import  SKILLS from './listSkills';

// PERSONNAL COMPONENTS
import Formation from './Formation';
import About from './About';

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
						<Formation  />
					</div>
					{/*COMPETENCES */}
					<div className=" col-lg-6 p-5">
						<h2 className="text-center p-5">Compétences</h2>
						<SkillBar skills={SKILLS} colors={colors}/>
						<a class="btn btn-outline-light btn-block "
						 href="https://github.com/sandix34/Mon-traqueur-d-apprentissage" 
						 role="button"
						 target="_blank"
						 >Voir mon journal complet de compétences <FontAwesomeIcon className="social" icon={faGithub}  color="#4daac4" /></a>
					</div>
				</section>
				<section className="SKILLS ">
					<h2>Ce que je fais</h2>
				</section>
			</main>
		);
	}
}

export default Main;