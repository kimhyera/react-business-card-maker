import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Maker from './components/maker/maker';

import './scss/app.scss';

function App({ authService }) {
	return (
		<div className="app">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Login authService={authService} />
					</Route>
					<Route path="/maker">
						<Maker authService={authService} />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
