import firebaseApp from './firebase';

class CardRepository {
	//다른 pc 를 열었을때도 동일한 화면이 나올수 있도록 작업을 해준다.
	syncCards(userId, onUpdate) {
		const ref = firebaseApp.database().ref(`${userId}/cards`);
		ref.on('value', (snapshot) => {
			const value = snapshot.val();
			value && onUpdate(value);
		});
		return () => ref.off();

		//언마운트 될때 리스너 분리
	}
	saveCard(userId, card) {
		firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
	}

	removeCard(userId, card) {
		firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
	}
}

export default CardRepository;
