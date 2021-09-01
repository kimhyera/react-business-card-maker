import React from 'react';
import Login from './components/login/login';

import './scss/app.scss';

function App({ authService }) {
	return <Login authService={authService} />;
}

export default App;
