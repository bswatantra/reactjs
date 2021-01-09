import { divide } from 'lodash';
import React from 'react';

function About ()
{
	return (
		<div className="container">
			<main role="main" className="inner cover">
				<h1 className="cover-heading">Swatantra Chaudhary</h1>
				<p className="lead">A Full Stack Web Developer , Working continusly for my skill development.</p>
				{/* <p className="lead">
					<a href="#" className="btn btn-lg btn-secondary">Learn more</a>
				</p> */}
			</main>

			<footer className="mastfoot mt-auto">
				<div className="inner">
					<p>Project of React js <a href="https://reactjs.org/">Learn</a>, by <a href="http://swatantrachaudhary.com.np/">Swatantra</a>.</p>
				</div>
			</footer>
		</div>
	)
}

export default About