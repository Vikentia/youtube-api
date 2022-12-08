import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { SearchField } from "../SearchField/SearchField";
import styles from "./Content.module.scss";

export const Content: React.FC = () => {
    let requestsWithResults = useAppSelector((state) => state.videos.requests);
    let currentRequest = useAppSelector((state) => state.videos.requests);

    return (
        <div className={styles.contentBlock}>
            <SearchField />

            {requestsWithResults.map((item) => {
                return (
                    <>
                        <p>Видео по запросу: {item.value}</p>
                        <ol>
                            {item.videos.map((video) => (
                                <div key={video.id?.videoId}>
                                    <li>{video.snippet.title}</li>
                                </div>
                            ))}
                        </ol>
                    </>
                );
            })}
        </div>
    );
};
