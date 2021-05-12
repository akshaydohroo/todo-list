import React from "react";
import styles from "./CategoryTask.module.css";
import { CSSTransition } from "react-transition-group";
import classes from "./noteDrop.module.css";
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
}

export default function CategoryTask(props) {
  let [open, setOpen] = React.useState(false);
  let dateTime = "";
  if (props.shouldDateBeThere) {
    dateTime +=
      props.task.taskDate.substring(
        props.task.taskDate.length - 2,
        props.task.taskDate.length
      ) +
      " " +
      months[Number(props.task.taskDate.substring(5, 7))];
  }
  if (props.time) dateTime += " " + tConvert(props.time);
  return (
    <div className={`${styles.categoryTask} ${props.isDone && styles.done}`}>
      <div className={styles.btngroup}>
        <button
          className={styles.cancelTask}
          onClick={() => props.cancelTaskHandler(props.task.id)}
        >
          <span className={styles.cancelIcon}></span>
        </button>
        <button
          className={styles.openNote}
          onClick={() => {
            setOpen((oldState) => {
              return !oldState;
            });
          }}
        >
          <span className={styles.dropIcon}></span>
        </button>
      </div>
      <div className={styles.taskContent}>
        <span className={`${styles.taskTitle} ${props.isDone && styles.done}`}>
          {props.task.taskTitle}
        </span>
        <span
          style={
            props.redColorBeThere ||
            (props.isImportant && props.date === props.task.taskDate)
              ? { color: "#d9534f" }
              : {}
          }
          className={styles.dueDate}
        >
          {dateTime}
        </span>
        <CSSTransition
          in={open}
          timeout={1}
          unmountOnExit
          classNames={{ ...classes }}
        >
          <span className={styles.note}>
            {props.task.taskNote === ""
              ? "You didnt add any Note"
              : props.task.taskNote}
          </span>
        </CSSTransition>
      </div>
      <input
        type="checkbox"
        checked={props.task.done}
        className={styles.doneControl}
        onChange={() => {
          props.changeStateToDoneHandler !== undefined &&
            props.changeStateToDoneHandler(props.task.id);
        }}
        // disabled={props.isDone}
      />
    </div>
  );
}
