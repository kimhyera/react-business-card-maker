import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import './maker.scss';

const Maker = ({ authService }) => {
	const [cards, setCards] = useState({
		1: {
			id: '1',
			name: 'Ellie',
			company: 'Samsung',
			theme: 'dark',
			title: 'Software Engineer',
			email: 'ellie@gmail.com',
			message: 'go for it',
			fileName: 'ellie',
			fileURL: null,
		},
		2: {
			id: '2',
			name: 'Ellie2',
			company: 'Samsung',
			theme: 'light',
			title: 'Software Engineer',
			email: 'ellie@gmail.com',
			message: 'go for it',
			fileName: 'ellie',
			fileURL: 'ellie.png',
		},
		3: {
			id: '3',
			name: 'Ellie3',
			company: 'Samsung',
			theme: 'colorful',
			title: 'Software Engineer',
			email: 'ellie@gmail.com',
			message: 'go for it',
			fileName: 'ellie',
			fileURL: null,
		},
	});

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

	const createOrUpdateCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card;
			return updated;
		});
	};

	const deleteCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
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
			<div className="maker-wrap">
				<Editor cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
				<Preview cards={cards} />
			</div>

			<footer className="footer">
				<p className="title">Code your dream</p>
			</footer>
		</section>
	);
};

export default Maker;
