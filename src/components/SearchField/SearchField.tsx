import React from "react";
import { Input } from "antd";
import styles from "./SearchField.module.scss";
import { apiYouTube } from "../../api/instance";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getVideosTC } from "../../redux/reducers/videosReducer";

export const SearchField: React.FC = () => {
    const { Search } = Input;
    const dispatch = useAppDispatch();
    const onSearch = (value: string) => {
        dispatch(getVideosTC(value));
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
