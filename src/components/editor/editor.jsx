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
							<input type="text" className="form-control" placeholder="" />
						</div>
						<div className="col-4">
							<input type="text" className="form-control" placeholder="" />
						</div>
						<div className="col-4">
							<input type="text" className="form-control" placeholder="" />
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<input type="text" className="form-control" placeholder="" />
						</div>
						<div className="col-6">
							<input type="text" className="form-control" placeholder="" />
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<input type="text" className="form-control" placeholder="" />
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<button type="button" className="btn btn-primary">
								ed
							</button>
						</div>
						<div className="col-6">
							<button className="btn btn-secondary ">asdfa</button>
						</div>
					</div>
				</li>
			))}
		</ul>
	</section>
);

export default Editor;
