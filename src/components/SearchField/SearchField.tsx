import React from "react";
import { Input } from "antd";
import styles from "./SearchField.module.scss";
import { apiYouTube } from "../../api/instance";

export const SearchField: React.FC = () => {
    const { Search } = Input;
    // const onSearch = (value: string) => console.log(value);
    const onSearch = (value: string) => {
        console.log(apiYouTube.getVideos(value));
    };
    return (
        <div className={styles.searchBlock}>
            <p>Поиск видео</p>
            <div>
                <Search
                    placeholder="Что хотите посмотреть?"
                    allowClear
                    enterButton="Найти"
                    size="large"
                    onSearch={onSearch}
                    className={styles.searchBlock__input}
                />
            </div>
        </div>
    );
};
