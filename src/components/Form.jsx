/* eslint-disable */
import { useEffect, useRef, useState } from "react";
import styles from "./Form.module.css";

export default function Form({
  date,
  meal,
  ingredient,
  calories,
  onSetRecord,
  dispatch,
}) {
  const [isFormValid, setIsFormValid] = useState(false);

  // using a Ref
  const inputRef = useRef(null);

  const formSubmitHandler = function (e) {
    e.preventDefault();
    if (!ingredient || calories < 0) return;

    const newRecord = {
      id: Date.now(),
      date,
      meal,
      ingredient,
      calories,
    };

    onSetRecord(newRecord);

    clearRecordField();
  };

  function clearRecordField() {
    dispatch({ type: "reset-fields" });
  }

  const handleCaloriesCount = function (e) {
    if (!e.target.value) return;

    // onSetCalories(e.target.value);
    dispatch({ type: "setCalories", payload: e.target.value });
  };

  useEffect(
    function () {
      setIsFormValid(ingredient && date);
    },
    [ingredient, date]
  );

  useEffect(function () {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="date">Date </label>{" "}
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) =>
              dispatch({ type: "setDate", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="meal">Meal </label>
          <select
            id="meal"
            value={meal}
            onChange={(e) =>
              dispatch({ type: "setMeal", payload: e.target.value })
            }
          >
            <option value={"breakfast"}>Breakfast</option>
            <option value={"lunch"}>Lunch</option>
            <option value={"dinner"}>Dinner</option>
            <option value={"snacks"}>Snacks</option>
          </select>
        </div>
        <div>
          <label htmlFor="ingredients"> One Ingredient </label>{" "}
          <input
            type="text"
            id="ingredients"
            value={ingredient}
            ref={inputRef}
            onChange={(e) =>
              dispatch({ type: "setIngredient", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="calories">Calories Count </label>{" "}
          <input
            className={calories < 0 ? styles.error : ""}
            type="number"
            id="calories"
            value={calories}
            onChange={handleCaloriesCount}
          />
        </div>
        {isFormValid && <button> Add Record</button>}
      </form>
    </>
  );
}
