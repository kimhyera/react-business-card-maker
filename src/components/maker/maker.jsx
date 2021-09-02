import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './maker.scss';

const Maker = ({ authService }) => {
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
			<footer className="footer">
				<p className="title">Code your dream</p>
			</footer>
		</section>
	);
};

export default Maker;
