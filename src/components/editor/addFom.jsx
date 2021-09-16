import React, { useRef } from 'react';

const AddFom = ({ FileInput, addCard }) => {
	const formRef = useRef();
	const nameRef = useRef();
	const companyRef = useRef();
	const themeRef = useRef();
	const titleRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	//console.dir(formRef.current);

	const onSubmit = (event) => {
		event.preventDefault();
		const obj = {
			id: Date.now(), //uuid
			name: nameRef.current.value || '', //null  없다면 생략해도 된다.
			company: companyRef.current.value || '',
			theme: themeRef.current.value, //select
			title: titleRef.current.value || '',
			email: emailRef.current.value || '',
			message: messageRef.current.value || '',
			fileName: '',
			fileURL: '',
		};

		formRef.current.reset();

		addCard(obj);
	};
	return (
		<form ref={formRef}>
			<ul className="editor-list add-form">
				<li className="item">
					<div className="row">
						<div className="col-4">
							<input type="text" className="form-control" placeholder="name" name="name" ref={nameRef} />
						</div>
						<div className="col-4">
							<input type="text" className="form-control" placeholder="company" name="company" ref={companyRef} />
						</div>
						<div className="col-4">
							<select name="theme" ref={themeRef} className="form-select">
								<option value="light">light</option>
								<option value="dark">dark</option>
								<option value="colorful">colorful</option>
							</select>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<input type="text" className="form-control" placeholder="title" name="title" ref={titleRef} />
						</div>
						<div className="col-6">
							<input type="text" className="form-control" placeholder="email" name="email" ref={emailRef} />
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<input type="text" className="form-control" placeholder="message" name="message" ref={messageRef} />
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<button type="button" className="btn btn-secondary">
								<FileInput />
							</button>
						</div>
						<div className="col-6">
							<button className="btn btn-primary " name="Add" onClick={onSubmit}>
								add
							</button>
						</div>
					</div>
				</li>
			</ul>
		</form>
	);
};

export default AddFom;
