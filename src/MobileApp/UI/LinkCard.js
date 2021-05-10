import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
export default function LinkCard(props) {
  return <Link className={styles.card} to={`/${props.to}`}>{props.children}</Link>;
}
