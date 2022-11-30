import { Button } from "antd";
import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Navigation.module.scss";

export const Navigation: React.FC = () => {
    return (
        <div className={styles.navBlock}>
            <img src={logo} alt="logo" />
            <Button type="link">Поиск</Button>
            <Button type="link">Избранное</Button>
        </div>
    );
};
