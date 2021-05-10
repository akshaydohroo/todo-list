import React from "react";
import styles from "./NewTaskForm.module.css";
import NewTaskFormCompnents from "./NewTaskFormCompnents";
import {Redirect,withRouter} from "react-router-dom";

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
let date = datetime.substring(0, 10);
let time = datetime.substring(11, 16);
let taskObj = Object.freeze({
  taskTitle: "",
  taskDate: date,
  taskTime: time,
  taskNote: "",
  taskCategory: "",
  isImportant: false,
});
export default function NewTaskForm(props) {
  let[isRedirect , setRedirect] = React.useState(false);
  let [err, setErr] = React.useState({});
  let [taskData, setTaskData] = React.useState(taskObj);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setErr(() => {
      return {};
    });
    let isFormOk = true;
    var d1 = parseInt(taskData.taskDate.substring(0, 5));
    var d2 = parseInt(date.substring(0, 5));
    if (d1 - d2 >= 70) {
      setErr((oldValue) => {
        return {
          ...oldValue,
          taskDate: "Task deadline cannot be more than 70 years from now",
        };
      });
      isFormOk = false;
    }
    if (taskData.taskDate === date && taskData.taskTime < time) {
      setErr((oldValue) => {
        return {
          ...oldValue,
          taskTime: "Agghhh well you cannot go in the past",
        };
      });
      isFormOk = false;
    }
    // if(taskData.isImportant){
    //   Object.keys(props.data).forEach((key)=>{
        
    //   })
    // }
    if(isFormOk){
      props.setDataHandler({newTask:{...taskData},verb:"add"});
      setRedirect(true);
    } 
  };
  if(!isRedirect)
  return (
    <form className={styles.taskform} onSubmit={formSubmitHandler}>
      <NewTaskFormCompnents
        taskData={taskData}
        setTaskData={setTaskData}
        err={err}
        date={date}
      />  
    </form>
  );
  else return <Redirect to="/"/>
}
