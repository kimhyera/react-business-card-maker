import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import './maker.scss';

const Maker = ({ authService, FileInput, cardRepository }) => {
	const history = useHistory();
	const [cards, setCards] = useState({});
	const [userId, setUserId] = useState(
		history.location.state && history.location.state.id
	);

	const onLogout = useCallback(() => {
		authService.logout();
	}, [authService]);

	//useEffect 로직별로 만든다.
	useEffect(() => {
		if (!userId) {
			return;
		}
		const stopSync = cardRepository.syncCards(userId, (cards) => {
			setCards(cards);
		});
		return () => stopSync();
	}, [userId, cardRepository]);

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (user) {
				setUserId(user.uid);
			} else {
				history.push('/');
			}
		});
	}, [authService, userId, history]);

	const createOrUpdateCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card;
			return updated;
		});
		cardRepository.saveCard(userId, card);
	};

	const deleteCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
		cardRepository.removeCard(userId, card);
	};
	return (
		<section className="maker">
			<header className="header">
				{onLogout && (
					<button className="logout" onClick={onLogout}>
						Logout
					</button>
				)}

				<img className="logo" src="/images/logo.png" alt="logo" />
				<h2 className="title">Business Card Maker</h2>
			</header>
			<div className="maker-wrap">
				<Editor
					FileInput={FileInput}
					cards={cards}
					addCard={createOrUpdateCard}
					updateCard={createOrUpdateCard}
					deleteCard={deleteCard}
				/>
				<Preview cards={cards} />
			</div>

			<footer className="footer">
				<p className="title">Code your dream</p>
			</footer>
		</section>
	);
};

export default Maker;
