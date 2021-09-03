import React from 'react';
import './preview.scss';

const DEFAULT_IMAGE = '/images/default_logo.png';
const Preview = ({ cards }) => {
	return (
		<section className="preview">
			<h3 className="title">Card Preview</h3>

			<ul className="card-list">
				{cards.map((card) => {
					const url = card.fileURL || DEFAULT_IMAGE;
					return (
						<li key={card.id}>
							<div className={`card ${getStyles(card.theme)}`}>
								<div className="d-flex">
									<div className="card-thumb col-auto">
										<img src={url} alt="dprofile photo" />
									</div>
									<div className="card-text col">
										<div className="name-box">
											<p className="name h3"> {card.name}</p>
											<p>{card.company}</p>
										</div>
										<div className="des-box">
											<p>{card.work}</p>
											<p>{card.email}</p>
											<p>{card.message}</p>
										</div>
									</div>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

function getStyles(theme) {
	switch (theme) {
		case 'dark':
			return 'dark';
		case 'light':
			return 'light';
		case 'colorful':
			return 'colorful';
		default:
	}
}

export default Preview;
