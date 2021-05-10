import React from "react";
import styles from "./NavBar.module.css";
import { CSSTransition } from "react-transition-group";
import classes from "./dropdown.module.css";
export default function NavBar() {
  let [isDrop, setDrop] = React.useState(true);
  
  const nodeRef = React.useRef(null)
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
          <div className={styles.completed}>Completed</div>
          <div className={styles.pending}>Pending</div>
          <div className={styles.important}>Important</div>
        </div>
      </CSSTransition>
    </nav>
  );
}
