import { useState, useContext, useEffect } from "react";
import CalorieTracker from "../components/CalorieTracker";
import Form from "../components/Form";
import Button from "../components/ButtonComponenet";
import Loader from "../components/Loader";
import { FilterRecordsByMeal, OrderRecords } from "../components/FilterRecords";
import ReportModal from "../components/ReportModal";
import { RecordContext } from "../customHooks/RecordContext";

import styles from "./AppLayout.module.css";
import { DataContext } from "../customHooks/DataContext";
/////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
function AppLayout() {
  const [showAddForm, setShowAddForm] = useState(false);
  const { recordValues, dispatchRecordValues } = useContext(RecordContext);
  const { meal, ingredient, date, calories } = recordValues;

  const {
    records,
    isLoading,
    error,
    addNewRecord,
    removeRecord,
    filteredRecords,
    handleUndo,
  } = useContext(DataContext);

  // Backup records state to store the original or previous state

  // const [filteredMeals, setFilteredMeals] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString());

  //Modal State
  const [isModalOpen, setIsModalOPen] = useState(false);

  const { userName } = useContext(RecordContext);

  //Dervied State:
  // // Determine which records to display: filteredRecords or all records
  // const displayedRecords = filteredMeals.length ? filteredMeals : records;

  function showForm() {
    setShowAddForm((show) => !show);
  }
  function handleRecordsAdding(record) {
    const isodate = new Date(record.date).toISOString();

    addNewRecord({
      ...record,
      date: isodate,
    });
  }

  //deleting on record  //Derived State
  function handleDeletingRecord(id) {
    removeRecord(id);
  }

  // Undo action to revert to the previous state stored in backupRecords
  function undo() {
    handleUndo();
  }

  //Filtering By Date

  function handleDateChange(event) {
    const selectedDate = new Date(event.target.value);
    selectedDate.setUTCHours(0, 0, 0, 0); // Set time to midnight UTC
    setCurrentDate(selectedDate.toISOString());
  }

  function isRecordDatesEqual(record) {
    const recordDate = new Date(record.date);
    const currentDateObj = new Date(currentDate);
    return (
      currentDateObj.getUTCDate() === recordDate.getUTCDate() &&
      currentDateObj.getUTCMonth() === recordDate.getUTCMonth() &&
      currentDateObj.getUTCFullYear() === recordDate.getUTCFullYear()
    );
  }

  const filteredByDate = records?.filter(isRecordDatesEqual);
  console.log({ records, filteredRecords });

  //handeling the modal
  const handleCloseModal = function () {
    setIsModalOPen(false);
  };

  const handleOpenModal = function () {
    setIsModalOPen(true);
  };

  return (
    <div className={styles.App}>
      <h2 className="heading">Hello, {userName} 👋</h2>

      {showAddForm && (
        <Form
          date={date}
          meal={meal}
          ingredient={ingredient}
          calories={calories}
          onSetRecord={handleRecordsAdding}
          dispatch={dispatchRecordValues}
        />
      )}

      <div className={styles["form-box"]}>
        <Button onClick={showForm}>
          {showAddForm ? "Close" : "Add New Record"}
        </Button>
        <Button className={styles["report"]} onClick={handleOpenModal}>
          Report
        </Button>
      </div>
      {error ? <p>{`${error} ⛔⛔`}</p> : null}
      {isLoading ? (
        <Loader />
      ) : (
        <CalorieTracker
          records={filteredRecords}
          onDeletingRecord={handleDeletingRecord}
        />
      )}
      <div className={styles["control-box"]}>
        <FilterRecordsByMeal />
        <OrderRecords />
        <Button className={styles["report"]} onClick={undo}>
          Reset 🔁
        </Button>
      </div>
      <ReportModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        currentDate={date}
        onDateChange={handleDateChange}
        filteredRecords={filteredByDate}
      />
    </div>
  );
}

export default AppLayout;
