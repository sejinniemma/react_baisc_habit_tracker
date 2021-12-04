import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ FileInput, authService, cardRepository }) => {
    const navigate = useNavigate();  
    const navigateState = useNavigate().state;
    const [cards, setCards] = useState({})
    const [userId, setUserId] = useState(navigateState && navigateState.id);

    const onLogout = useCallback(
        () => {
            authService.logout();
        },[authService]);

    const createOrUpDateCard = (card) => {
        setCards(cards => {
            const updated = {...cards}
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card)
    }

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards}
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId,card)
    }

    useEffect(()=>{
        if(!userId){
            return
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        })
        return () => stopSync()
    },[userId],cardRepository);

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user){
                setUserId(user.uid);
            }else{
                navigate('/');
            }
        })
    },[authService, userId, navigate])

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