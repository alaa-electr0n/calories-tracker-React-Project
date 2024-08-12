import { useContext } from "react";
import styles from "./CalorieTracker.module.css";
import { RecordContext } from "../customHooks/RecordContext";
import Loader from "./Loader";
import { Link } from "react-router-dom";

function CalorieTracker({ records, onDeletingRecord }) {
  const { error, isLoading } = useContext(RecordContext);
  return (
    <div className={styles.record}>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles["record-list"]}>
          {records.length > 0 ? (
            records.map((item) => (
              <CalorieItem
                item={item}
                key={item.id}
                onDeletingRecord={onDeletingRecord}
              />
            ))
          ) : (
            <p className={styles["initial-text"]}>
              {error ? `${error} ⚠⚠` : "Start Track Your Food 🍕🍗"}
            </p>
          )}
        </ul>
      )}
    </div>
  );
}

function CalorieItem({ item, onDeletingRecord }) {
  return (
    <li className={Number(item.calories) > 1500 ? styles["biggerCalorie"] : ""}>
      <CalorieDate date={item.date} />
      <span>{item.meal}</span>
      <Link to={`/record/${item.id}`}>
        <span>{item.ingredient}</span>
      </Link>
      <span className={styles["record-calories"]}>
        {Number(item.calories) > 1500
          ? `${Number(item.calories)} ⚠`
          : Number(item.calories)}
      </span>

      <button
        className={styles["btn-delete"]}
        onClick={() => onDeletingRecord(item.id)}
      >
        &#128465;
      </button>
    </li>
  );
}

function CalorieDate({ date }) {
  const dateObj = new Date(date);
  const year = dateObj.getUTCFullYear();
  const month = dateObj.toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  const day = dateObj.getUTCDate();

  return (
    <div className={styles["record-date"]}>
      <span className={styles["record-date-month"]}>{month}</span>
      <span className={styles["record-date-day"]}>{day}</span>
      <span className={styles["record-date-year"]}>{year}</span>
    </div>
  );
}

export default CalorieTracker;
