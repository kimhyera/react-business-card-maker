import React from 'react';
import './preview.scss';

const Preview = ({ cards }) => {
	return (
		<section className="preview">
			<h1 className="title">Card Preview</h1>

			<ul className="card-list">
				{cards.map((card) => (
					<li>
						<div className="card ">
							<div class="card-header">Featured</div>

							<div className="d-flex">
								<div className="card-thumb col-auto">
									<img src={card.fileMane} alt="" />
								</div>
								<div className="card-text col">
									<div className="name-box">
										<p className="name"> {card.name}</p>
										<p>{card.theme}</p>
									</div>
									<div className="des-box">
										<p>{card.company}</p>
										<p>{card.title}</p>
										<p>{card.message}</p>
									</div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Preview;
