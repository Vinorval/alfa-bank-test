import React from "react";
import Card from "../card/card";
import Styles from "./cards.module.css";
import { useSelector, useDispatch } from "../../services/hooks";

export default function Cards() {
    const items = useSelector(store => store.games.items);

    return (
        <div className={Styles.cards}>
            {items?.map( item => {
                return <Card name={item.name} image={item.image} id={item.id} key={item.id} like={item.like ? item.like : false} />
            })}
        </div>
    )
}