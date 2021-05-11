import React from "react";
import NavBar from "./UI/NavBar";
import styles from "./DashBoard.module.css";
import LinkCard from "./UI/LinkCard";
import DashBoardCard from "./UI/DashBoardCard";
import AddTask from "./UI/AddTask";
const DashBoard = (props) => {
  const delCategoryHandler = (category) => {
    let x = window.confirm(
      `Are you sure you want to delete this category? ${
        countNotDone[category] > 0
          ? `\nYou have ${countNotDone[category]} task remaining.`
          : ""
      }\nNote: This Action is irreversible and all the todos defined in this category will be lost.`
    );
    if (x) props.setDataHandler({ category: category, verb: "del" });
  };
  let countNotDone = {};
  function numOfTaskRemaining(data) {
    let count = 0;
    props.data[data].forEach((element) => {
      if (!element.done) count += 1;
    });
    countNotDone[data] = count;
    return count;
  }
  let allTaskNotDne = (data) => {
    let count = 0;
    Object.keys(data).forEach((category) => {
      count += data[category].length;
    });
    return count;
  };
  return (
    <>
      <div className={styles.dashboard}>
        <NavBar />
        <h2 className={styles.title}>Lists</h2>
        <div className={styles["dashboard-content"]}>
          {Object.keys(props.data).map((category) => (
            <LinkCard to={category} key={category}>
              {category !== "all" && (
                <button
                  className={styles.delCategory}
                  onClick={(event) => {
                    event.preventDefault();
                    delCategoryHandler(category);
                  }}
                >
                  <span className={styles.delIcon}></span>
                </button>
              )}
              <DashBoardCard
                category={category}
                notDone={
                  category === "all"
                    ? allTaskNotDne(props.data)
                    : numOfTaskRemaining(category)
                }
              />
            </LinkCard>
          ))}
        </div>
      </div>
      <AddTask />
    </>
  );
};

export default DashBoard;
