import { createContext, useReducer, useState } from "react";

const RecordContext = createContext();

const initialRecordValues = {
  date: new Date().toISOString().split("T")[0],
  meal: "breakfast",
  ingredient: "",
  calories: 0,
};

function recordsValuesReducer(state, action) {
  switch (action.type) {
    case "setCalories":
      return { ...state, calories: action.payload };
    case "setDate":
      return { ...state, date: action.payload };
    case "setMeal":
      return { ...state, meal: action.payload };
    case "setIngredient":
      return { ...state, ingredient: action.payload };
    case "reset-fields":
      return initialRecordValues;
    default:
      throw new Error("There is no such Key in the record object");
  }
}

function RecordProvider({ children }) {
  const [recordValues, dispatchRecordValues] = useReducer(
    recordsValuesReducer,
    initialRecordValues
  );
  const [userName, setUserName] = useState("");
  return (
    <RecordContext.Provider
      value={{ recordValues, dispatchRecordValues, userName, setUserName }}
    >
      {children}
    </RecordContext.Provider>
  );
}

export { RecordProvider, RecordContext };
