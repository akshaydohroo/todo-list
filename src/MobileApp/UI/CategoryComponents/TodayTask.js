import React from "react";
import styles from "./TodayTask.module.css";
import CategoryTask from "./CategoryTask";
export default function TodayTask(props) {
  function cancelTaskHandler(taskId) {
    props.setDataHandler({
      taskId: taskId,
      verb: "del",
      delCategory: props.category,
    });
  }
  function changeStateToDoneHandler(taskId) {
    props.setDataHandler({
      taskId: taskId,
      verb: "mod",
      delCategory: props.category,
    });
  }
  let shouldDateBeThere = true;
  let redColorBeThere = false;
  if (props.title === "Today") shouldDateBeThere = false;
  if (props.title === "Late") redColorBeThere = true;
  
  let isImportant = props.title === "Important Tasks";
  let isDone  = props.title === "Done";
  return (
    <div className={styles.taskcontainer}>
      <div
        style={props.title === "Important Tasks" ? { color: "#0275d8" } : {}}
        className={styles.title}
      >
        {props.title}
      </div>
      {props.todayTasks.map((item) => {
        return (
          <CategoryTask
            task={item}
            time={item.taskTime}
            cancelTaskHandler={cancelTaskHandler}
            changeStateToDoneHandler={changeStateToDoneHandler}
            key={item.id}
            shouldDateBeThere={shouldDateBeThere}
            redColorBeThere={redColorBeThere}
            isImportant={isImportant}
            date={props.date}
            isDone = {isDone}
          />
        );
      })}
    </div>
  );
}
