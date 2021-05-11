import React from "react";
import styles from "./CategoryContent.module.css";
export default function CategoryContent(props) {
  let lateTasks = [];
  let doneTasks = [];
  let impTasks = [];
  let futureTasks = [];
  let todayTasks = [];
  const categoryDataSortOnDate = (categoryData) => {
    categoryData.forEach((task) => {
      console.log(task);
    });
  };
  ((data) => {
    if (props.category === "all") {
      Object.keys(data).forEach((category) => {
        categoryDataSortOnDate(data[category]);
      });
    }else{
        categoryDataSortOnDate(data);
    }
  })(props.data);
  return (
    <div className={styles.categoryContent}>
      <div className={styles.lateTasks}></div>
      <div className={styles.todayTasks}></div>
      <div className={styles.futureTasks}></div>
      <div className={styles.doneTasks}></div>
    </div>
  );
}
