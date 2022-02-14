import React from 'react';
import Styles from './Header.module.css';

interface IProps {
    listChange: Function,
    itsLike: boolean 
}

const Header: React.FC<IProps> = ({ listChange, itsLike }) => {
    //функция для фильтрации карточек, меняет булевое значение, которое отвечает за отрисовку нужного списка
    const clickButton = () => {
        return listChange()
    }

    return (
        <header className={Styles.header}>
            <h1 className={`${Styles.header_title} ${Styles.header_text}`}>Sea creatures</h1>
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