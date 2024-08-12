import { NavLink } from "react-router-dom";
import styles from "./SideNav.module.css";

function SideNav() {
  return (
    <nav className={`${styles.sidenav}`}>
      <h1 className={styles.logo}> Daily Food Tracker📆</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/app/track-how">Guide</NavLink>
        </li>
        <li>
          <NavLink to="/app/tracker">Food Tracker</NavLink>
        </li>
      </ul>
      <div className={styles["sidenav-footer"]}>
        <p>
          Food Tracker REACT project is done by{" "}
          <a
            href="https://www.linkedin.com/in/alaa-elsayed-mohammed"
            target="_blank"
          >
            <strong>Alaa ElSayed Mohammed</strong>
          </a>{" "}
          as attribution for{" "}
          <a href="https://almdrasa.com" rel="no-follow">
            <strong>Almdrasa</strong>{" "}
          </a>
          for React Deep Dive Course
        </p>
      </div>
    </nav>
  );
}

export default SideNav;
