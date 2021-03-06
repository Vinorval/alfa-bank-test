import React from "react";
import likeP from "../../image/like.svg";
import noneLike from "../../image/like-none.svg";
import ButtonDelete from "../../image/button-delete.png";
import { useDispatch } from "../../services/hooks";
import Styles from "./card.module.css";
import { getLike, getDisLike, deleteCard } from '../../services/actions/action';
import { TFood } from '../../utils/types';

interface IIngredientProps {
    item: TFood
    like: boolean;
}

const Card: React.FC<IIngredientProps> = ({ item, like }) => {
    const dispatch = useDispatch();
    //фунуция для постановки лайка
    const clickLike = () => {
        //в зависимости от самого лайка - он либо ставится, либо удаляется
        like ? dispatch(getDisLike(item)) : dispatch(getLike(item))
    }
    //функция на удаление карточки
    const clickDelete = () => {
        dispatch(deleteCard(item.id));
    }

    return (
        <div className={Styles.card}>
            <img alt={item.name} src={item.image} className={Styles.card_image} />
            <div className={Styles.card_info}>
                <p className={Styles.card_name}>{item.name}</p>
                <button className={Styles.card_like} onClick={clickLike}>{like ? <img src={noneLike} alt="Button-Like" /> : <img src={likeP} alt="Button-Like" />}</button>
            </div>
            <img onClick={clickDelete} className={Styles.card_delete} src={ButtonDelete} alt="Button-Delete"/>
        </div>
    )
}

export default Card;
