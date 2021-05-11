import React from "react";
import { useHistory } from "react-router";
import styles from "./CategoryNavBarButtonBar.module.css";
export default function CategoryNavBarButtonBar() {
  let history = useHistory();
  return (
    <>
      <button className={styles.backButton} onClick={() => history.goBack()}>
        <span className={styles.backButtonIcon} />
      </button>
      <button className={styles.infoButton}>
        <span className={styles.infoButtonIcon} />
      </button>
    </>
  );
}
