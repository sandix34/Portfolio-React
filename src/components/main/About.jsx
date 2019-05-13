import React, { Component } from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
					<img src={myPhoto} alt="photo" class="img-thumbnail rounded-circle"></img>
				</div>

				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima veniam, quasi illo molestias corrupti nostrum. Ex praesentium enim a inventore distinctio, quam rerum sunt, architecto, earum reiciendis iure ad ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus quasi facilis reprehenderit dolores voluptate similique incidunt animi eum quae pariatur mollitia molestias explicabo dolore eaque blanditiis, accusantium, tenetur cupiditate.
                    </p>
				<a href="https://github.com/sandix34" target="_blank">
					<FontAwesomeIcon className="social" icon={faGithub} size="2x" color="#4daac4" />
				</a>
			</div>
         );
	}
}

export default About;