import React from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';


const CardEditForm = ({ FileInput,card, upDateCard, deleteCard }) => {
    const {
        name, 
        company,
        theme,
        title,
        email,
        message,
        fileName,
        fileURL,
    } = card;

    const onFileChange = file => {
        upDateCard({
            ...card,
            fileName : file.name,
            fileURL : file.url,
        })
    }
    
    const onChange = (event) => {
        if(event.currentTarget == null){
            return;
        } 
        event.preventDefault();
        upDateCard({
            ...card,
            [event.currentTarget.name] : event.currentTarget.value,
        })
    }

    const onSubmit = () => {
        deleteCard(card);
    }

    return(
        <form className={styles.form}>
            <input 
                className={styles.input} 
                type="text" 
                name="name" 
                value={name} 
                onChange={onChange}
            />
            <input 
                className={styles.input} 
                type="text" 
                name="company" 
                value={company} 
                onChange={onChange}
            />
            <select 
                className={styles.select} 
                name="theme" 
                value={theme}
                onChange={onChange}>
                    <option value="light">light</option>
                    <option value="dark">dark</option>
                    <option value="colorful">colorful</option>
            </select>
            <input 
                className={styles.input} 
                type="text" 
                name="title" 
                value={title} 
                onChange={onChange}
            />
            <input 
                className={styles.input} 
                type="text" 
                name="email" 
                value={email} 
                onChange={onChange}
            />
            <textarea 
                className={styles.textarea} 
                name="message" 
                value={message}
                onChange={onChange}>
            </textarea>
           
           <div className={styles.fileInput}>
            <FileInput name={fileName} onFileChange={onFileChange}/>
            <Button name='Delete' onClick={onSubmit}/>
           </div>
        </form>
    )
};

export default CardEditForm;