import React, { Component } from 'react';

// photo
import myPhoto from '../../img/myPhoto.jpg';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// PERSONNAL COMPONENTS
import Formation from './Formation';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<main className="main  ">
				{/*SECTION FORMATION */}
				<section className="formation row no-gutters" id="about">
					{/* A PROPOS */}
					<div className="about d-flex flex-column align-items-center col-lg-6 p-5 ">
						<h2 className="p-5">A propos de moi</h2>
						<div className="p-5">
							<img src={myPhoto} alt="photo" class="img-thumbnail rounded-circle"></img>
						</div>
						
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima veniam, quasi illo molestias corrupti nostrum. Ex praesentium enim a inventore distinctio, quam rerum sunt, architecto, earum reiciendis iure ad ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus quasi facilis reprehenderit dolores voluptate similique incidunt animi eum quae pariatur mollitia molestias explicabo dolore eaque blanditiis, accusantium, tenetur cupiditate.
						</p>
						<a href="https://github.com/sandix34" target="_blank">
							<FontAwesomeIcon className="social" icon={faGithub} size="2x" color="black" />
						</a>
					</div>
					{/* FORMATIONS */}
					<div className="parcours col-lg-6 p-5">
						<h2 className="text-center p-5">formations</h2>
						<Formation  />
					</div>
					{/*SECTION COMPETENCES */}
				</section>
				<section className="skill ">
					<h2>Compétences</h2>
				</section>
			</main>
		);
	}
}

export default Main;