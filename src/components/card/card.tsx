import React from "react";
import likeP from "../../image/like.svg";
import noneLike from "../../image/like-none.svg";
import ButtonDelete from "../../image/button-delete.png";
import { useSelector, useDispatch } from "../../services/hooks";
import Styles from "./card.module.css";
import { getLike, getDisLike, deleteCard } from '../../services/actions/action';

interface IIngredientProps {
    name: string;
    image: string;
    like: boolean;
    id: number;
}

const Card: React.FC<IIngredientProps> = ({ name, image, like, id }) => {
    const dispatch = useDispatch();
    const clickLike = () => {
        console.log(id);
        like ? dispatch(getDisLike(id)) : dispatch(getLike(id))
        //dispatch(getLike(id))
    }
    const clickDelete = () => {
        console.log(id);
        dispatch(deleteCard(id));
    }

    return (
        <div className={Styles.card}>
            <img alt={name} src={image} className={Styles.card_image} />
            <div className={Styles.card_info}>
                <p className={Styles.card_name}>{name}</p>
                <button onClick={clickLike}>{like ? <img src={noneLike} alt="Button-Like" /> : <img src={likeP} alt="Button-Like" />}</button>
            </div>
            <img onClick={clickDelete} className={Styles.card_delete} src={ButtonDelete} alt="Button-Delete"/>
        </div>
    )
}

export default Card;
