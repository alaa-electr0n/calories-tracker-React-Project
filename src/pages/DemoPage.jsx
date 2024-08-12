import styles from "./DemoPage.module.css";
import { memo } from "react";
function DemoPage() {
  return (
    <div className={styles.demopage}>
      <header className={styles.header}>
        <img src="/ffod.webp" alt="food cover" />
        <h2> How This App Works?</h2>
      </header>
      <main className={styles.mainContent}>
        <ul>
          <li className={styles.step}>
            <p>Start with your name and email.</p>
            <img src="/login.png" />
          </li>
          <li className={styles.step}>
            <p> Add your meal ingredients one by one.</p>
            <p> Type the amount of calories you consumed.</p>
            <img src="/addRecord.png" />
            <img src="/adding-records.png" />
          </li>

          <li className={styles.step}>
            <p> If you want a report for a specific day</p>
            <img src="/totalReport.png" />
          </li>
          <li className={styles.step}>
            <p> If you want to order them by date</p>
            <img src="/orderbydate.png" />
          </li>
          <li className={styles.step}>
            <p>
              {" "}
              If you want to order the records from highest calories to the
              lowest
            </p>
            <img src="/orderbycalories.png" />
          </li>
          <li className={styles.step}>
            <p>
              {" "}
              There is A highlight warning if one record has a large amount of
              calories
            </p>
            <img src="/highCalorie.png" />
          </li>
          <li className={styles.step}>
            <p> Do you want to filter records by the meals only</p>
            <img src="/filterbymeal.png" />
          </li>
          <li className={styles.step}>
            <p>Click on the ingredient for further information</p>
            <img src="/details.png" />
          </li>
        </ul>
      </main>
    </div>
  );
}

export default memo(DemoPage);
