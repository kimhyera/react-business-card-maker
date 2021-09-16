import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyAZzatQMJTtyVdcRdKDZ0HWXHYldUU9HAE',
	authDomain: 'business-card-maker-42cc6.firebaseapp.com',
	databaseURL: 'https://business-card-maker-42cc6-default-rtdb.firebaseio.com',
	projectId: 'business-card-maker-42cc6',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
