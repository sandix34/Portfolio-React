import React, { Component } from 'react';

// TIMELINE
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

class Formation extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<Timeline lineColor={'#fff'} >
				<TimelineItem
					key="001"
					dateText="Avril 2019"
					dateInnerStyle={{ background: '#4274a0', color: '#fff' }}
				>
					<h3 style={{ color: '#fff', marginTop: '4em' }}>Reactjs</h3>
					<h4 style={{ color: '#fff' }}>Dyma.fr E-learning </h4>
					<p style={{ color: '#fff' }}>
						Créer des applications avec des composants réutilisables.
						</p>

				</TimelineItem>
				<TimelineItem
					key="002"
					dateText="Avril 2019"
					dateInnerStyle={{ background: '#4daac4', color: '#fff' }}
				>
					<h3 style={{ color: '#fff', marginTop: '4em' }}>Maîtrise de la qualité en projet web</h3>
					<h4 style={{ color: '#fff' }}>Opquast E-learning  </h4>
					<p style={{ color: '#fff' }}>
						Excellente connaissance des bonnes pratiques qualité Webet du vocabulaire associé. Compétences réelles et appréciables pour participer à des projets Web.
						</p>

				</TimelineItem>
				<TimelineItem
					key="003"
					dateText="Février 2019"
					dateInnerStyle={{ background: '#5495c8', color: '#fff' }}
				>
					<h3 style={{ color: '#fff', marginTop: '4em' }}>Développeur web</h3>
					<h4 style={{ color: '#fff' }}>O'clock Téléprésentiel</h4>
					<p style={{ color: '#fff' }}>
					Formation intensive au format téléprésentiel d'une durée de 400 heures. Apprentissage du développement front-end et back-end grâce aux langages HTML, CSS, Javascript, PHP, SQL. Pratique du versioning (Git/Github) lors de la réalisation d'exercices. Ateliers en pair-programming.
					</p>

				</TimelineItem>
				<TimelineItem
					key="004"
					dateText="1998"
					dateInnerStyle={{ background: '#4274a0', color: '#fff' }}
				>
					<h3 style={{ color: '#fff', marginTop: '5em' }}>Niveau BTS Production Horticole</h3>
					<h4 style={{ color: '#fff' }}>Lycèe Agricole de Théza Perpignan</h4>

				</TimelineItem>
				<TimelineItem
					key="005"
					dateText="1996"
					dateInnerStyle={{ background: '#4daac4', color: '#fff' }}
				>
					<h3 style={{ color: '#fff', marginTop: '5em' }}>BTA Aménagement Paysagers</h3>
					<h4 style={{ color: '#fff' }}>LEGTA Toulouse-Auzeville Toulouse</h4>

				</TimelineItem>



			</Timeline>
		);
	}
}

export default Formation;