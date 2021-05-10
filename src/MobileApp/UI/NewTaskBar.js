import React from 'react'
import styles from "./NewTaskBar.module.css";
import {useHistory} from "react-router-dom"
export default function NewTaskBar() {
    let history = useHistory();
    return (
        <div className={styles.taskbar}>
            <h3 className={styles.title}>New task</h3>
            <button className={styles.close} onClick={()=>{history.goBack()}}><span className={styles.icon}></span></button>
        </div>
    )
}
