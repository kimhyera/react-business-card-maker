import React from 'react';
import Card from './card';
import './preview.scss';

const Preview = ({ cards }) => {
	return (
		<section className="preview">
			<h3 className="title">Card Preview</h3>

			<ul className="card-list">
				{Object.keys(cards).map((key) => (
					<Card key={key} card={cards[key]} />
				))}
			</ul>
		</section>
	);
};

export default Preview;
