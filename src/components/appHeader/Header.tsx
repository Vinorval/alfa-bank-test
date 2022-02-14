import React from 'react';
import Styles from './Header.module.css';

interface IProps {
    listChange: Function,
    itsLike: boolean 
}

const Header: React.FC<IProps> = ({ listChange, itsLike }) => {
    const clickButton = () => {
        return listChange()
    }

    return (
        <header className={Styles.header}>
            <h1 className={`${Styles.header_title} ${Styles.header_text}`}>Free-To-Play Games</h1>
            <div className={Styles.conteiner}>
                <button onClick={clickButton} className={Styles.button} />
                {itsLike ?
                  <p className={`${Styles.button_text} ${Styles.header_text}`}>Показать все карточки</p> :
                  <p className={`${Styles.button_text} ${Styles.header_text}`}>Показать только задайканые карточки</p>
                }
            </div>
        </header>
    )
}

export default Header;