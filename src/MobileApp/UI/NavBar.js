import React from "react";
import styles from "./NavBar.module.css";
import { CSSTransition } from "react-transition-group";
import classes from "./dropdown.module.css";
export default function NavBar() {
  let [isDrop, setDrop] = React.useState(true);

  const nodeRef = React.useRef(null);
  return (
    <nav className={styles.navbar}>
      <div
        className={styles.navbarIcon}
        onClick={() =>
          setDrop((oldValue) => {
            return !oldValue;
          })
        }
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <CSSTransition
        in={!isDrop}
        timeout={300}
        unmountOnExit
        classNames={{ ...classes }}
      >
        <div className={styles["dropMenu"]} ref={nodeRef}>
          <div
            className={styles.completed}
            onClick={() => {
              window.location.href =
                "https://weather-app-by-akshay-dohroo.netlify.app/";
            }}
          >
            Weather App
          </div>
          <div
            className={styles.pending}
            onClick={() => {
              window.location.href =
                "https://akshay-dohroo-covid-19-app.netlify.app/";
            }}
          >
            Covid Tracker App
          </div>
          <div
            className={styles.important}
            onClick={() => {
              window.location.href =
                "https://akshay-dohroo-portfolio-v1.netlify.app/";
            }}
          >
            My Portfolio
          </div>
        </div>
      </CSSTransition>
    </nav>
  );
}
