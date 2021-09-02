import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => (
	<header className="header">
		{onLogout && (
			<button className="logout" onClick={onLogout}>
				Logout
			</button>
		)}
		<img className="logo" src="/images/logo.png" alt="logo" />
		<h1 className="title">Business Card Maker</h1>
	</header>
);

export default Header;
