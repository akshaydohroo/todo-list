import React from "react";
import styles from "./CategoryNavbar.module.css";
import CategoryNavBarButtonBar from "./CategoryNavBarButtonBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTag,
  faBriefcase,
  faPalette,
  faHeadphonesAlt,
  faHome,
  faBook,
  faShoppingCart,
  faPlane,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {
  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
}
let icons = {
  all: [faClipboardList, "#5687ff"],
  art: [faPalette, "#ac68c4"],
  music: [faHeadphonesAlt, "#f89886"],
  work: [faBriefcase, "#fdbb76"],
  home: [faHome, "#dc6a5b"],
  study: [faBook, "#8c86d0"],
  travel: [faPlane, "#57cb7b"],
  shopping: [faShoppingCart, "#42b3be"],
  other: [faUserTag, "#0275d8"],
};
export default function CategoryNavbar(props) {
  return (
    <div className={styles.categoryNavbar}>
      <CategoryNavBarButtonBar />
      <div className={styles.navbarContent}>
        <span className={styles.categoryIcon}>
          <FontAwesomeIcon
            className={styles.fontCategoryIcon}
            icon={icons[props.category][0]}
            color={icons[props.category][1]}
          />
        </span>
        <span className={styles.categoryName}>
          {capitalizeFirstLetter(props.category)}
        </span>
        <span className={styles.totalTask}>{props.totaltask} Tasks</span>
      </div>
    </div>
  );
}
