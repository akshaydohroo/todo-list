import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faStickyNote } from "@fortawesome/free-regular-svg-icons";
import { faTag, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./NewTaskForm.module.css";

export default function NewTaskFormCompnents(props) {
  let datetime = React.useRef(null);
  let bellfocus = React.useRef(null);
  function dateInputFocus() {
    datetime.current.style.borderBottom = "2px solid #5786ff";
    bellfocus.current.style.color = "#5786ff";
  }
  function dateInputBlur() {
    datetime.current.style.borderBottom = "none";
    bellfocus.current.style.color = "#9d9c9d";
  }
  function onChangeHandler(e) {
    props.setTaskData((oldData) => {
      return { ...oldData, [e.target.name]: e.target.value};
    });
  }
  function onChangeCheckBoxHandler(e) {
    props.setTaskData((oldData) => {
      return { ...oldData, [e.target.name]: !oldData[e.target.name] };
    });
  }
  return (
    <>
      <div className={styles.tileWrap}>
        <label htmlFor="taskTitle" className={styles.labelTitle}>
          What are you planning?
        </label>
        <textarea
          id="taskTitle"
          className={styles.taskTitle}
          minLength="3"
          maxLength="20"
          name="taskTitle"
          onChange={onChangeHandler}
          value={props.taskData.taskTitle}
          required
        />
        <small className={styles.errStyle}>{props.err.taskTitle}</small>
      </div>
      <div className={styles.taskContent}>
        <div className={styles.dateWrap}>
          <div
            className={`${styles.datetime} ${
              (props.err.taskDate || props.err.taskTime) && styles.errinp
            }`}
            ref={datetime}
          >
            <input
              type="date"
              id="taskdate"
              min={props.date}
              className={styles.dateinput}
              onFocus={dateInputFocus}
              onBlur={dateInputBlur}
              name="taskDate"
              onChange={onChangeHandler}
              value={props.taskData.taskDate}
              required
            />
            <input
              type="time"
              className={styles.timeinput}
              onFocus={dateInputFocus}
              onBlur={dateInputBlur}
              name="taskTime"
              onChange={onChangeHandler}
              value={props.taskData.taskTime}
              required
            />
          </div>
          <label
            htmlFor="taskdate"
            className={styles.dateLabel}
            onClick={dateInputFocus}
            ref={bellfocus}
          >
            <FontAwesomeIcon icon={faBell} className={styles.bellicon} />
          </label>
        </div>
        <small className={styles.errStyle}>
          {props.err.taskDate}
          {props.err.taskTime}{" "}
        </small>
        <div className={styles.noteWrap}>
          <input
            type="text"
            id="note"
            className={styles.noteInput}
            placeholder="Add note"
            name="taskNote"
            onChange={onChangeHandler}
            value={props.taskData.taskNote}
          />
          <label htmlFor="note" className={styles.noteLabel}>
            <FontAwesomeIcon icon={faStickyNote} className={styles.noteIcon} />
          </label>
        </div>
        <small className={styles.errStyle}>{props.err.taskNote}</small>
        <div className={styles.tagWrap}>
          <input
            type="text"
            id="tag"
            className={styles.tagInput}
            placeholder="Category"
            name="taskCategory"
            onChange={onChangeHandler}
            value={props.taskData.taskCategory}
            list={props.datalistCatgory}
            autoComplete="off"
          />
          <label htmlFor="tag" className={styles.tagLabel}>
            <FontAwesomeIcon icon={faTag} className={styles.tagIcon} />
          </label>
          {props.children}
        </div>
        <small className={styles.errStyle}>{props.err.taskCategory}</small>

        <div className={styles.impWrap}>
          <input
            type="checkbox"
            id="isImportant"
            className={styles.impInput}
            name="isImportant"
            onChange={onChangeCheckBoxHandler}
            checked={props.taskData.isImportant}
          />
          <label htmlFor="isImportant" className={styles.impLabel}>
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className={styles.impIcon}
            />
            <span>Is it important?</span>
          </label>
        </div>
      </div>
      <button className={styles.addTask} type="submit">
        Create
      </button>
    </>
  );
}
