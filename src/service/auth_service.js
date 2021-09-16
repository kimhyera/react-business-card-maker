import { firebaseAuth } from './firebase';

class AuthService {
	login(providerName) {
		const authProvider = new firebaseAuth[`${providerName}AuthProvider`]();
		return firebaseAuth.signInWithPopup(authProvider);
	}

	logout() {
		firebaseAuth.signOut();
	}

	onAuthChange(onUserChanged) {
		firebaseAuth.onAuthStateChanged((user) => {
			onUserChanged(user);
		});
	}
}

export default AuthService;
