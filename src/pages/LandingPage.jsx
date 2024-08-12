import styles from "./LandingPage.module.css";
import LandingForm from "../components/LandingForm";

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <img
        className={styles.landingPhoto}
        src="dark-surface-with-ping-pong.webp"
      />
      <h2>
        Welcome to your <br /> <span>Daily Tracker</span>
      </h2>
      <LandingForm />
    </div>
  );
}

export default LandingPage;
