import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AddUser from '../editor/AddUser';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import './maker.scss';

const Maker = ({ authService }) => {
	const [cards, setCards] = useState([
		{
			id: '1',
			name: 'Teo',
			company: 'Hyera home',
			theme: 'dark',
			email: 'test@gmail.com',
			message: 'go for it',
			work: 'My Sun',
			fileURL: 'teo.jpg',
			fileName: '',
		},
		{
			id: '2',
			name: 'Teo2',
			company: 'Hyera home',
			theme: 'light',
			email: 'test@gmail.com',
			message: 'go for it',
			work: 'My Sun',
			fileURL: null,
			fileName: '',
		},
		{
			id: '3',
			name: 'Te3o',
			company: 'Hyera home',
			theme: 'light',
			email: 'test@gmail.com',
			message: 'go for it',
			work: 'My Sun',
			fileURL: null,
			fileName: '',
		},
	]);

	const history = useHistory();
	const onLogout = () => {
		authService.logout();
	};

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (!user) {
				history.push('/');
			}
		});
	});
	//update 카드
	const addCard = (obj) => {
		const updated = [...cards, obj];
		setCards(updated);
		console.log(cards, obj);
	};

	//create usder

	const { id, name, company, theme, email, message, work, fileURL, fileName } = cards;
	const [inputs, setInputs] = useState({
		id: '',
		name: '',
		company: '',
		theme: '',
		email: '',
		message: '',
		work: '',
		fileURL: '',
		fileName: '',
	});
	const onChange = (e) => {
		const { name, value } = e.target;
		console.log(e.target.value);
		setInputs({
			...inputs,
			id: Date.now(), //uuid,
			[name]: value,
		});

		console.log(inputs);
	};

	const onCreate = () => {
		const updated = [...cards, inputs];
		setCards(updated);
		console.log(cards, inputs);
	};

	return (
		<section className="maker">
			<header className="header">
				{onLogout && (
					<button className="logout" onClick={onLogout}>
						Logout
					</button>
				)}
				<img className="logo" src="/images/logo.png" alt="logo" />
				<h2 className="title">Business Card Maker</h2>
			</header>

			<AddUser onChange={onChange} onCreate={onCreate} name={name} company={company} theme={theme} work={work} email={email} message={message} />
			<div className="maker-wrap">
				<Editor cards={cards} addCard={addCard} />
				<Preview cards={cards} />
			</div>

			<footer className="footer">
				<p className="title">Code your dream</p>
			</footer>
		</section>
	);
};

export default Maker;
