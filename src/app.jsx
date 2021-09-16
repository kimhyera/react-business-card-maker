import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Maker from './components/maker/maker';

import './scss/app.scss';

function App({ FileInput, authService, cardRepository }) {
	return (
		<div className="app">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Login authService={authService} />
					</Route>
					<Route path="/maker">
						<Maker
							FileInput={FileInput}
							authService={authService}
							cardRepository={cardRepository}
						/>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
