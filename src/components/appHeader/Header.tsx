import React from 'react';
import Styles from './Header.module.css';

export default function Header () {
    return (
        <header className={Styles.header}>
            <h1 className={`${Styles.header_title} ${Styles.header_text}`}>Free-To-Play Games</h1>
            <div className={Styles.conteiner}>
                <button className={Styles.button} />
                <p className={`${Styles.button_text} ${Styles.header_text}`}>Показать только задайканые карточки</p>
            </div>
        </header>
    )
}