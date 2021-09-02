import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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

	return (
		<section className="maker">
			<header className="header">
				{onLogout && (
					<button className="logout" onClick={onLogout}>
						Logout
					</button>
				)}
				<img className="logo" src="/images/logo.png" alt="logo" />
				<h1 className="title">Business Card Maker</h1>
			</header>
			<div className="maker-wrap">
				<Editor cards={cards} />
				<Preview cards={cards} />
			</div>

			<footer className="footer">
				<p className="title">Code your dream</p>
			</footer>
		</section>
	);
};

export default Maker;
