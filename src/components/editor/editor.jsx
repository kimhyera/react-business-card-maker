import React from 'react';
import AddFom from './addFom';
import './editor.scss';
import EditForm from './editForm';

//

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
	<section className="editor">
		<h3 className="title">Card Maker</h3>
		<ul className="editor-list">
			{Object.keys(cards).map((key) => (
				<EditForm key={key} FileInput={FileInput} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />
			))}
		</ul>

		<h4 className="title">Add Card</h4>
		<AddFom addCard={addCard} FileInput={FileInput} />
	</section>
);

export default Editor;
