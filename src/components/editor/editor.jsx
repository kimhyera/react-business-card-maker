import React from 'react';
import './editor.scss';

const Editor = ({ cards }) => (
	<section className="editor">
		<h1 className="title">Card Maker</h1>

		<ul className="editor-list">
			{cards.map((card) => (
				<li className="item">
					<div className="row">
						<div className="col-4">
							<input type="text" className="form-control" value={card.name} placeholder="name" />
						</div>
						<div className="col-4">
							<input type="text" className="form-control" value={card.company} placeholder="" />
						</div>
						<div className="col-4">
							<select name="theme" id="" className="form-select">
								<option value="light">Light</option>
								<option value="dark">Dark</option>
								<option value="colorful">Colorful</option>
							</select>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<input type="text" className="form-control" value={card.work} placeholder="" />
						</div>
						<div className="col-6">
							<input type="text" className="form-control" value={card.email} placeholder="" />
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<input type="text" className="form-control" value={card.message} placeholder="" />
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<button type="button" className="btn btn-primary">
								image
							</button>
						</div>
						<div className="col-6">
							<button className="btn btn-secondary ">Delete</button>
						</div>
					</div>
				</li>
			))}
		</ul>
	</section>
);

export default Editor;
