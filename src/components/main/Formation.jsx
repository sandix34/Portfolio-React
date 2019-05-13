import React, { Component } from 'react';

// TIMELINE
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class Formation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
					<Timeline lineColor={'#fff'}>
					<TimelineItem
						key="001"
						dateText="11/2010 – Present"
						dateInnerStyle={{ background: '#4daac4', color: '#fff' }}
					>
						<h3 style={{ color: '#fff', marginTop: '2em' }}>Title, Company</h3>
						<h4 style={{ color: '#fff' }}>Subtitle</h4>
						<p style={{ color: '#fff' }}>
							Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
							exercitation. Veniam velit adipisicing anim excepteur nostrud magna
							nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
							reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
							est.
						</p>
					
					</TimelineItem>
				
					
					
					</Timeline>
         );
    }
}
 
export default Formation;