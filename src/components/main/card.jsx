import React from 'react';

const Card = ({ details }) => {


	// dynamic image
	const requireImage = chemin => {
		return require(`../../img/${chemin}`)
	}

	return (
		<div className="m-3">
			<div className="card " style={{ width: '30rem' }}>
				<img src={requireImage(details.image)} className="card-img-top" alt={details.nom} />
				<div className="card-body">
					{details.text}
				</div>
				<div className="card-footer">
				<a href={details.link} target="_blank" class="btn btn-outline-info">En savoir plus</a>
				</div>
			</div>
		</div>
	)
}

export default Card