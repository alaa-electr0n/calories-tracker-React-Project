import { useContext, useEffect, useState } from "react";
import { RecordContext } from "../customHooks/RecordContext";
import styles from "./LandingForm.module.css";
import Button from "../components/ButtonComponenet";
import { useNavigate } from "react-router-dom";
function LandingForm() {
  const [email, setEmail] = useState("tracker@example.com");
  const { userName, setUserName } = useContext(RecordContext);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    if (userName && email) {
      navigate("app/tracker", { replace: true });
    }
  }

  useEffect(
    function () {
      if (!userName || !email) navigate("/");
    },
    [email, navigate, userName]
  );

  return (
    <form className={styles["form-box"]} onSubmit={handleLogin}>
      <div className={styles["input-row"]}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your Name"
        />
      </div>
      <div className={styles["input-row"]}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button>Let's Track</Button>
    </form>
  );
}

export default LandingForm;
