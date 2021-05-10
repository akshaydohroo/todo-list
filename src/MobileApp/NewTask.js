import React from 'react'
import styles from "./NewTask.module.css";
import NewTaskForm from './NewTaskForm';
import NewTaskBar from "./UI/NewTaskBar";
export default function NewTask(props) {
    return (
        <div className={styles.newtask}>
            <NewTaskBar/>
            <NewTaskForm {...props}/>
        </div>
    )
}
