import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import Button from "../components/ButtonComponenet";
import { useState } from "react";
import styles from "./MainLayout.module.css";

function MainLayout() {
  // const [isShown, setIsShown] = useState(false);
  return (
    <>
      {/* <Button
        className={styles["sidenav-toggle"]}
        onClick={() => setIsShown(!isShown)}
      >
        {isShown ? "☰" : "✕"}
      </Button> */}
      <SideNav />
      <Outlet />
    </>
  );
}

export default MainLayout;
