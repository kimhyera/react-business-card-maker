import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ImageFileInput from './components/image_file_input/image_file_input';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import CardRepository from './service/cardRepository';

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
	<ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
	<React.StrictMode>
		<App
			authService={authService}
			FileInput={FileInput}
			cardRepository={cardRepository}
		/>
	</React.StrictMode>,
	document.getElementById('root')
);
