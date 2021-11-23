import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
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
        {
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
           {
            id: '3',
            name: 'Ellie3',
            company:'Samsung',
            theme: 'colorful',
            title: 'Software Enginner',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null,
           }
    ])
    const navigate = useNavigate();
 
    const onLogout = () => {
        authService.logout();
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
                    <Editor cards={cards} className={styles.editor} />
                    <Preview cards={cards} className={styles.preview}/>
                </div>
            <Footer className={styles.footer}/>
        </section>
    )
}

export default Maker;