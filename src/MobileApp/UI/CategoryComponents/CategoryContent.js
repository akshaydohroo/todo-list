import React from "react";
import styles from "./CategoryContent.module.css";
import TodayTask from "./TodayTask";
export default function CategoryContent(props) {
  let datetime = new Date();
  datetime = (function (date) {
    var tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? "+" : "-",
      pad = function (num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? "0" : "") + norm;
      };

    return (
      date.getFullYear() +
      "-" +
      pad(date.getMonth() + 1) +
      "-" +
      pad(date.getDate()) +
      "T" +
      pad(date.getHours()) +
      ":" +
      pad(date.getMinutes()) +
      ":" +
      pad(date.getSeconds()) +
      dif +
      pad(tzo / 60) +
      ":" +
      pad(tzo % 60)
    );
  })(datetime);
  let todayDate = datetime.substring(0, 10);
  let currTime = datetime.substring(11, 16);
  let impTasks = [];
  let lateTasks = [];
  let doneTasks = [];
  let futureTasks = [];
  let todayTasks = [];
  const categoryDataSortOnDate = (categoryData) => {
    categoryData.forEach((task) => {
      if (task === undefined) return true;
      if (task.done) {
        doneTasks.push(task);
      } else {
        if (task.taskDate === todayDate) {
          if (task.taskTime < currTime) {
            lateTasks.push(task);
          } else {
            todayTasks.push(task);
          }
        } else if (task.taskDate > todayDate) {
          futureTasks.push(task);
        } else {
          lateTasks.push(task);
        }
        if (task.isImportant) impTasks.push(task);
      }
    });
  };
  ((data) => {
    if (props.category === "all") {
      Object.keys(data).forEach((category) => {
        categoryDataSortOnDate(data[category]);
      });
      sortCategoryData(impTasks);
      sortCategoryData(todayTasks);
      sortCategoryData(lateTasks);
      sortCategoryData(doneTasks);
      sortCategoryData(futureTasks);
    } else {
      categoryDataSortOnDate(data);
    }
  })(props.data);

  function sortCategoryData(data) {
    data.sort((o1, o2) => {
      if (o1.taskDate === o2.taskDate) {
        if (o1.taskTime >= o2.taskTime) return 1;
        else return -1;
      } else if (o1.taskDate >= o2.taskDate) return 1;
      else return -1;
    });
  }
  return (
    <div className={styles.categoryContent}>
      {lateTasks.length === 0 ? (
        <></>
      ) : (
        <TodayTask
          todayTasks={lateTasks}
          setDataHandler={props.setDataHandler}
          category={props.category}
          title="Late"
        />
      )}
      {impTasks.length === 0 ? (
        <></>
      ) : (
        <TodayTask
          todayTasks={impTasks}
          setDataHandler={props.setDataHandler}
          category={props.category}
          title="Important Tasks"
          date={todayDate}
        />
      )}
      {todayTasks.length === 0 ? (
        <></>
      ) : (
        <TodayTask
          todayTasks={todayTasks}
          setDataHandler={props.setDataHandler}
          category={props.category}
          title="Today"
        />
      )}
      {futureTasks.length === 0 ? (
        <></>
      ) : (
        <TodayTask
          todayTasks={futureTasks}
          setDataHandler={props.setDataHandler}
          category={props.category}
          title="Tasks Scheduled for future"
        />
      )}

      {doneTasks.length === 0 ? (
        <></>
      ) : (
        <TodayTask
          todayTasks={doneTasks}
          setDataHandler={props.setDataHandler}
          category={props.category}
          title="Done"
        />
      )}
    </div>
  );
}
