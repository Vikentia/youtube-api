import { Input } from "antd";
import React from "react";
import styles from "./Content.module.scss";

export const Content: React.FC = () => {
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);
    return (
        <div className={styles.contentBlock}>
            <p>Поиск видео</p>
            <div>
                <Search
                    placeholder="Что хотите посмотреть?"
                    allowClear
                    enterButton="Найти"
                    size="large"
                    onSearch={onSearch}
                    className={styles.contentBlock__input}
                />
            </div>
        </div>
    );
};
