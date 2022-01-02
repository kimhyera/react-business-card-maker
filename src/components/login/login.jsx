import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './login.scss';

const Login = ({ authService }) => {
	const history = useHistory();
	const goToMaker = (userId) => {
		history.push({
			pathname: '/maker',
			state: { id: userId },
		});
	};

	const onLogin = (event) => {
		authService //
			.login(event.currentTarget.textContent)
			.then((data) => goToMaker(data.user.uid));
	};

	useEffect(() => {
		authService.onAuthChange((user) => {
			user && goToMaker(user.id);
		});
	});

	return (
		<section class="login-wrap">
			<header className="header">
				<img className="logo" src="/images/logo.png" alt="logo" />
				<h4 className="title">Business Card Maker</h4>
			</header>

			<section className="login ">
				<h5 className="mb-3">Login</h5>

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
