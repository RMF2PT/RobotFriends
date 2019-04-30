import React from 'react';

const Card = () => {
	return (
		<div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
			<img src="https://robohash.org/name?size=200x200" alt="robots" />
			<div>
				<h2>Name</h2>
				<p>Email</p>
			</div>
		</div>
	);
};
export default Card;
