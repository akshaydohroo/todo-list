import React from "react";
import styles from "./AddTask.module.css";
import { useHistory } from "react-router-dom";
export default function AddTask() {
  let history = useHistory();
  return (
    <button
      className={styles.button}
      onClick={() => {
        history.push({
          pathname: "/addtask",
        });
      }}
    >
      <span className={styles.icon}></span>
    </button>
  );
}
