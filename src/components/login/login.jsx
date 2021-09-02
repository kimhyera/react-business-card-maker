import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './login.scss';

const Login = ({ authService }) => {
	const history = useHistory();

	const goToMaker = (userId) => {
		history.push({
			pathname: '/maker',
			state: {
				id: userId,
			},
		});
	};

	const onLogin = (event) => {
		authService
			.login(event.currentTarget.textContent) //
			.then((data) => goToMaker(data.user.uid));

		console.log(event.currentTarget.textContent);
	};

	useEffect(() => {
		authService.onAuthChange((user) => {
			user && goToMaker(user.uid);
		});
	});

	return (
		<section class="login-wrap">
			<header className="header">
				<img className="logo" src="/images/logo.png" alt="logo" />
				<h1 className="title">Business Card Maker</h1>
			</header>

			<section className="login">
				<h1>Login</h1>

				<ul className="list">
					<li className="item">
						<button onClick={onLogin}>Google</button>
					</li>
					<li className="item">
						<button onClick={onLogin}>Github</button>
					</li>
				</ul>
			</section>
			<footer className="footer">
				<p className="title">Code your dream</p>
			</footer>
		</section>
	);
};

export default Login;
