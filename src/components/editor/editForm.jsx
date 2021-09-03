import React from 'react';

const EditForm = ({ card, updateCard, deleteCard }) => {
	const onChange = (event) => {
		if (event.currentTarget == null) {
			return;
		}

		console.log(event.currentTarget.name, event.currentTarget.value);
		event.preventDefault();
		updateCard({
			...card,
			[event.currentTarget.name]: event.currentTarget.value,
		});
	};

	const onSubmit = () => {
		console.log('del');
		const id = '1';
		deleteCard(id);
	};
	return (
		<li className="item" key={card.id} data-id={card.id}>
			<div className="row">
				<div className="col-4">
					<input type="text" className="form-control" value={card.name} placeholder="name" onChange={onChange} />
				</div>
				<div className="col-4">
					<input type="text" className="form-control" value={card.company} onChange={onChange} />
				</div>
				<div className="col-4">
					<select name="theme" className="form-select" value={card.theme} onChange={onChange}>
						<option value="light">light</option>
						<option value="dark">dark</option>
						<option value="colorful">colorful</option>
					</select>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<input type="text" className="form-control" value={card.work} onChange={onChange} />
				</div>
				<div className="col-6">
					<input type="text" className="form-control" value={card.email} onChange={onChange} />
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<input type="text" className="form-control" value={card.message} onChange={onChange} />
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
};

export default EditForm;
