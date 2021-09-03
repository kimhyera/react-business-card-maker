import React from 'react';

function AddUser({ name, company, theme, work, email, message, onChange, onCreate }) {
	return (
		<div>
			<ul className="editor-list add-form">
				<li className="item">
					<div className="row">
						<div className="col-4">
							<input type="text" className="form-control" placeholder="name" name="name" onChange={onChange} />
						</div>
						<div className="col-4">
							<input type="text" className="form-control" placeholder="company" name="company" onChange={onChange} />
						</div>
						<div className="col-4">
							<select name="theme" onChange={onChange} className="form-select">
								<option value="light">light</option>
								<option value="dark">dark</option>
								<option value="colorful">colorful</option>
							</select>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<input type="text" className="form-control" placeholder="work" name="work" onChange={onChange} />
						</div>
						<div className="col-6">
							<input type="text" className="form-control" placeholder="email" name="email" onChange={onChange} />
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<input type="text" className="form-control" placeholder="message" name="message" onChange={onChange} />
						</div>
					</div>

					<div className="row">
						<div className="col-6">
							<button type="button" className="btn btn-secondary">
								image
							</button>
						</div>
						<div className="col-6">
							<button className="btn btn-primary " name="Add" onClick={onCreate}>
								add
							</button>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default AddUser;
