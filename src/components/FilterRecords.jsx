import { useContext } from "react";
import { DataContext } from "../customHooks/DataContext";

export function FilterRecordsByDate({ currentDate, onDateChange }) {
  return (
    <div>
      <label htmlFor="filterDate">filter by Date: </label>
      <input
        type="date"
        id="filterDate"
        value={currentDate}
        onChange={onDateChange}
      />
    </div>
  );
}
export function FilterRecordsByMeal() {
  const { handleFilteringByMeals } = useContext(DataContext);

  // Filtering records by meal type and using backupRecords to ensure consistent filtering

  return (
    <div>
      <label htmlFor="filterMeal">filter by Meal: </label>
      <select
        id="filterMeal"
        onChange={(e) => handleFilteringByMeals(e.target.value)}
      >
        {/* {new line} */}
        <option value="all">All</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snacks">Snacks</option>
      </select>
    </div>
  );
}

export function OrderRecords() {
  const { handleOrderingByDate, handleOrderingByCalories } =
    useContext(DataContext);

  // order the record list by only the dates

  //order the records list by calories from bigger to smaller

  const handleSelectChange = (event) => {
    const { value } = event.target;
    if (value === "byDate") {
      handleOrderingByDate();
    } else if (value === "byCalories") {
      handleOrderingByCalories();
    } else {
      {
        /* {new line} */
      }
      return;
    }
  };

  return (
    <div>
      <label htmlFor="order">order by: </label>
      <select id="order" onChange={handleSelectChange}>
        <option value="byCalories">Calories</option>
        <option value="byDate">Date</option>
      </select>
    </div>
  );
}
