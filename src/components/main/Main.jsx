import React, { Component } from 'react';

// photo
import myPhoto from '../../img/myPhoto.jpg';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<main className="main  ">
				{/*SECTION FORMATION */}
				<section className="formation d-flex ">
					<div className="col-lg-6">
						<h2>A propos de moi</h2>
						<img src={myPhoto} alt="photo" class="img-thumbnail rounded-circle"></img>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima veniam, quasi illo molestias corrupti nostrum. Ex praesentium enim a inventore distinctio, quam rerum sunt, architecto, earum reiciendis iure ad ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus quasi facilis reprehenderit dolores voluptate similique incidunt animi eum quae pariatur mollitia molestias explicabo dolore eaque blanditiis, accusantium, tenetur cupiditate.
						</p>
						<a href="https://github.com/sandix34" target="_blank">
							<FontAwesomeIcon className="social" icon={faGithub} size="2x" color="black" />
						</a>
					</div>
					<div className="col-lg-6">
						<h2>formation</h2>
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