import React from "react";
import Card from "../card/card";
import Styles from "./cards.module.css";

export default function Cards() {
    return (
        <div className={Styles.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}