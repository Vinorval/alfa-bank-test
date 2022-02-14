import React from "react";
import Card from "../card/card";
import Styles from "./cards.module.css";
import { useSelector } from "../../services/hooks";

interface ICardProps {
    list: boolean;
}

const Cards: React.FC<ICardProps> = ({ list }) => {
  //из стора забираем списак всех карточек
    const items = useSelector(store => store.games.items);
    //и карточек, где есть лайк
    const likeItems = useSelector(store => store.games.likeItems);

    return (
        <div className={Styles.cards}>
            {list?
              likeItems?.map( item => {
                return <Card item={item} key={item.id} like={true} />
              }) :
              items?.map( item => {
                return <Card item={item} key={item.id} like={item.like ? item.like : false} />
              })}
        </div>
    )
}

export default Cards