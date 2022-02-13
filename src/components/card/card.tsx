import React from "react";
import likeP from "../../image/like.svg";
import noneLike from "../../image/like-none.svg";
import ButtonDelete from "../../image/button-delete.png";
import Styles from "./card.module.css";

interface IIngredientProps {
    name: string;
    image: string;
    like: boolean;
}

const Card: React.FC<IIngredientProps> = ({ name, image, like }) => {
    return (
        <div className={Styles.card}>
            <img alt={name} src={image} className={Styles.card_image} />
            <div className={Styles.card_info}>
                <p className={Styles.card_name}>{name}</p>
                {like ? <button><img src={noneLike} alt="Button-Like" /></button> : <button><img src={likeP} alt="Button-Like" /></button>}
            </div>
            <img className={Styles.card_delete} src={ButtonDelete} alt="Button-Delete"/>
        </div>
    )
}

export default Card;
