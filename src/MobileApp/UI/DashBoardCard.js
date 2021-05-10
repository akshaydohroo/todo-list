import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DashBoardCard.module.css";
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
// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {
  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
}

const DashBoardCard = (props) => {  
  return (
    <div className={styles.content}>
      <FontAwesomeIcon
        icon={
          icons.hasOwnProperty([props.category])
            ? icons[props.category][0]
            : icons["other"][0]
        }
        className={styles.icon}
        style={{
          color: icons.hasOwnProperty([props.category])
            ? icons[props.category][1]
            : icons["other"][1],
        }}
      />
      <div className={styles.category}>
        {capitalizeFirstLetter(props.category)}
      </div>
      <div className={styles.remaining}>
        {props.notDone} tasks remaining
      </div>
    </div>
  );
};

export default DashBoardCard;
