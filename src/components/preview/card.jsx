import React from 'react';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = ({ card }) => {
	const { name, company, title, email, message, theme, fileName, fileURL } = card;
	const url = fileURL || DEFAULT_IMAGE;
	return (
		<li>
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
							<p>{card.title}</p>
							<p>{card.email}</p>
							<p>{card.message}</p>
						</div>
					</div>
				</div>
			</div>
		</li>
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
export default Card;
