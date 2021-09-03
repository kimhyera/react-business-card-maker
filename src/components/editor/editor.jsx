import React from 'react';
import AddFom from './addFom';
import './editor.scss';

const Editor = ({ cards, addCard }) => (
	<section className="editor">
		<h3 className="title">Card Maker</h3>

		<ul className="editor-list">
			{cards.map((card) => {
				const onSubmit = () => {
					console.log('del');
				};
				return (
					<li className="item" key={card.id} data-id={card.id}>
						<div className="row">
							<div className="col-4">
								<input type="text" className="form-control" value={card.name} placeholder="name" />
							</div>
							<div className="col-4">
								<input type="text" className="form-control" value={card.company} />
							</div>
							<div className="col-4">
								<select name="theme" className="form-select">
									<option value="light">light</option>
									<option value="dark">dark</option>
									<option value="colorful">colorful</option>
								</select>
							</div>
						</div>
						<div className="row">
							<div className="col-6">
								<input type="text" className="form-control" value={card.work} />
							</div>
							<div className="col-6">
								<input type="text" className="form-control" value={card.email} />
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<input type="text" className="form-control" value={card.message} />
							</div>
						</div>
						<div className="row">
							<div className="col-6">
								<button type="button" className="btn btn-primary">
									image
								</button>
							</div>
							<div className="col-6">
								<button className="btn btn-secondary " name="Delete" onClick={onSubmit}>
									Delete
								</button>
							</div>
						</div>
					</li>
				);
			})}
		</ul>

		<h4 className="title">Add Card</h4>

		<AddFom addCard={addCard} />
	</section>
);

export default Editor;
