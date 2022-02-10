import React from "react";
import like from "../../image/like.svg";
import noneLike from "../../image/like-none.svg";
import ButtonDelete from "../../image/button-delete.png";
import Styles from "./card.module.css";

export default function Card() {
    return (
        <div className={Styles.card}>
            <div className={Styles.card_image} />
            <div className={Styles.card_info}>
                <p className={Styles.card_name}>name-card</p>
                <img src={like} alt="Button-Like" />
            </div>
            <img className={Styles.card_delete} src={ButtonDelete} alt="Button-Delete"/>
        </div>
    )
}
