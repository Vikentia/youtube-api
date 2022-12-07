import React from "react";
import { Main } from "../../pages/Main";
import styles from "./App.module.scss";

function App() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.app}>
                <Main />
            </div>
        </div>
    );
}

export default App;
