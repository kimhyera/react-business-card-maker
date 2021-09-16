import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const EditForm = ({ FileInput, card, updateCard, deleteCard }) => {
	const nameRef = useRef();
	const companyRef = useRef();
	const themeRef = useRef();
	const titleRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const { name, company, title, email, message, theme, fileName, fileURL } =
		card;

	const onFileChange = (file) => {
		updateCard({
			...card,
			fileName: file.name,
			fileURL: file.url,
		});
	};

	const onChange = (event) => {
		if (event.currentTarget == null) {
			return;
		}
		event.preventDefault();

		console.log(event.currentTarget.value);
		updateCard({
			...card,
			[event.currentTarget.name]: event.currentTarget.value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		deleteCard(card);
	};

	return (
		<form className="adit-form">
			<li className="item" key={card.id} data-id={card.id}>
				<div className="row">
					<div className="col-4">
						<input
							className="form-control"
							type="text"
							name="name"
							//ref={nameRef}
							value={name}
							onChange={onChange}
						/>
					</div>
					<div className="col-4">
						<input
							type="text"
							className="form-control"
							value={card.company}
							//ref={companyRef}
							name="company"
							onChange={onChange}
						/>
					</div>
					<div className="col-4">
						<select
							className="form-select"
							value={card.theme}
							//ref={themeRef}
							name="theme"
							onChange={onChange}
						>
							<option value="light">light</option>
							<option value="dark">dark</option>
							<option value="colorful">colorful</option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<input
							type="text"
							className="form-control"
							value={card.title}
							//ref={titleRef}
							name="title"
							onChange={onChange}
						/>
					</div>
					<div className="col-6">
						<input
							type="text"
							className="form-control"
							value={card.email}
							//ref={emailRef}
							name="email"
							onChange={onChange}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<input
							type="text"
							className="form-control"
							value={card.message}
							//ref={messageRef}
							name="message"
							onChange={onChange}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<FileInput onFileChange={onFileChange} />
					</div>
					<div className="col-6">
						<button
							className="btn btn-secondary "
							name="Delete"
							onClick={onSubmit}
						>
							Delete
						</button>
					</div>
				</div>
			</li>
		</form>
	);
};

export default EditForm;
