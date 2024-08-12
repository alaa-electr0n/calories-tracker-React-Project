import { useParams } from "react-router-dom";
import styles from "./RecordDetails.module.css";
import { useCallback, useContext, useEffect } from "react";
import Loader from "../components/Loader";
import SideNav from "../components/SideNav";
import { DataContext } from "../customHooks/DataContext";

function capitalizeWord(word) {
  console.log(word);
  if (!word) return word;
  return word.trim().split("")[0].toUpperCase() + word.trim().slice(1);
}

function formatDate(dateString) {
  const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
}

function RecordDetails() {
  const { error, isLoading, record, loadRecordData } = useContext(DataContext);

  const { id } = useParams();

  useEffect(
    function () {
      loadRecordData(id);
    },
    [loadRecordData, id]
  );

  console.log(id);
  console.log(record);

  const getImg = useCallback(
    function () {
      const img = new Image();
      img.src = `https://www.themealdb.com/images/ingredients/${record.ingredient}.png`;
      img.onerror = function () {
        img.src = "/ffod.png";
      };

      return img.src;
    },
    [record.ingredient]
  );

  if (isLoading) return <Loader />;
  if (error) return <p>{`${error} ⛔⛔`}</p>;

  return (
    <>
      <SideNav />
      <main className={styles.recordDetails}>
        <div className={styles.card}>
          <p className={styles.meal}> {record.meal}</p>
          <img src={getImg()} alt={record.ingredient} />

          <div className={styles.content}>
            <p className={styles.ingredient}>
              {" "}
              {capitalizeWord(record.ingredient)}
            </p>
            <p className={styles.calories}>
              Calories: {Number(record.calories)} k/cal
            </p>
            <p className={styles.date}>{formatDate(record.date)} </p>
            <a
              className={styles.externalLink}
              href={`https://en.wikipedia.org/wiki${record.ingredient}`}
            >
              Read about {record.ingredient}
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default RecordDetails;
