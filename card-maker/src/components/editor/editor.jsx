import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({FileInput,cards, addCard, upDateCard, deleteCard}) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card maker</h1>
        {
            Object.keys(cards).map(key => 
            <CardEditForm 
                key={key} 
                FileInput={FileInput}
                card={cards[key]}
                upDateCard={upDateCard} 
                deleteCard={deleteCard}
                />)
        }
        <CardAddForm FileInput={FileInput} onAdd={addCard} />
    </section>
          )
    ;

export default Editor;