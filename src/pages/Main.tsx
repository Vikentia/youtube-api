import { Button } from "antd";
import React from "react";
import { Content } from "../components/Content/Content";
import { Navigation } from "../components/Navigation/Navigation";
import styles from "./Main.module.scss";

export const Main: React.FC = () => {
    return (
        <div>
            <div className={styles.navBlock}>
                <Navigation />
                <Button type="link">Выйти</Button>
            </div>
            <div className={styles.wrapContent}>
                <Content />
            </div>
        </div>
    );
};
