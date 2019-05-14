import React, { Component } from 'react';

// Images
import allomovies from '../../img/allomovies.jpg';
import markdownEditor from '../../img/markdownEditor.jpg';
import openLayers from '../../img/openLayers.jpg'

class Projets extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className="projets d-flex row justify-content-center ">
				<div className="m-3">
					<div className="card " style={{ width: '30rem' }}>
						<img src={allomovies} className="card-img-top" alt="..." />
						<div className="card-body">
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>
				<div className="p-3">
					<div className="card" style={{ width: '30rem' }}>
						<img src={markdownEditor} className="card-img-top" alt="..." />
						<div className="card-body">
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. </p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>
				<div className="p-3">
					<div className="card" style={{ width: '30rem' }}>
						<img src={openLayers} className="card-img-top" alt="..." />
						<div className="card-body">
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>
				<div className="p-3">
					<div className="card" style={{ width: '30rem' }}>
						<img src={allomovies} className="card-img-top" alt="..." />
						<div className="card-body">
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default Projets;