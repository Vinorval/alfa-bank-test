import React from "react";
import Styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <p className={Styles.footer_text}>Данный, небольной проект создан как тестовое задание для вакансии Jounior Frontent Developer Alfa Bank.</p>
        </footer>
    )
}

export default Footer;