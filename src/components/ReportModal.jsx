import styles from "./ReportModal.module.css";
import Modal from "react-modal";
import { FilterRecordsByDate } from "./FilterRecords";

Modal.setAppElement("#root"); // Set the root element for accessibility

function ReportModal({
  isOpen,
  onRequestClose,
  currentDate,
  onDateChange,
  onFilter,
  filteredRecords,
}) {
  const totalCalories = filteredRecords.reduce(
    (sum, record) => sum + Number(record.calories),
    0
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Report Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.content}>
        <h2>Report</h2>

        <div className={styles["filter-box"]}>
          <FilterRecordsByDate
            currentDate={currentDate}
            onDateChange={onDateChange}
          />
          {/* <button onClick={onFilter}>Filter</button> */}
        </div>
        {filteredRecords.length > 0 ? (
          <ul>
            {filteredRecords.map((record) => (
              <li key={record.id}>
                <div>Meal: {record.ingredient}</div>
                <div>Calories: {record.calories}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No records found for the selected date.</p>
        )}
        <h3>Total Calories: {totalCalories}</h3>
        <button onClick={onRequestClose} className={styles["btn-close"]}>
          X
        </button>
      </div>
    </Modal>
  );
}

export default ReportModal;
