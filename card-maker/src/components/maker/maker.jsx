import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ FileInput,authService }) => {
    const [cards, setCards] = useState({
        '1' : {
            id: '1',
            name: 'Ellie',
            company:'Samsung',
            theme: 'light',
            title: 'Software Enginner',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        },
        '2' : {
            id: '2',
            name: 'Ellie2',
            company:'Samsung',
            theme: 'dark',
            title: 'Software Enginner',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null,
           },
        '3' : {
            id: '3',
            name: 'Ellie3',
            company:'Samsung',
            theme: 'colorful',
            title: 'Software Enginner',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null,
           },
    })
   
    const navigate = useNavigate();
 
    const onLogout = () => {
        authService.logout();
    }

    const createOrUpDateCard = (card) => {
        setCards(cards => {
            const updated = {...cards}
            updated[card.id] = card;
            return updated;
        });
    }

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards}
            delete updated[card.id];
            return updated;
        });
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user){
                navigate('/');
            }
        })
    })

    return (
        <section className={styles.maker}>
            <Header  className={styles.header} onLogout={onLogout}/>
                <div className={styles.container}>
                    <Editor 
                        FileInput={FileInput}
                        cards={cards} 
                        addCard={createOrUpDateCard} 
                        className={styles.editor}
                        upDateCard={createOrUpDateCard}
                        deleteCard={deleteCard}
                     />
                    <Preview 
                        cards={cards} 
                        className={styles.preview}
                    />
                </div>
            <Footer className={styles.footer}/>
        </section>
    )
}

export default Maker;