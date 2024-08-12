import { createContext, useCallback, useEffect, useReducer } from "react";
import {
  getRecords,
  addOneRecord,
  deleteRecord,
  getRecordById,
} from "./apiFunctions";

const DataContext = createContext();

const initialState = {
  records: [],
  filteredRecords: [],
  isLoading: false,
  error: "",
  record: {},
  currentMealFilter: "all",
};

function reducerfn(state, action) {
  switch (action.type) {
    //starting fetching records
    case "fetch/start":
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    //Error fetching records
    case "fetch/error":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // Success Fetching records
    case "fetch/success":
      return {
        ...state,
        records: action.payload,
        filteredRecords: action.payload,
        isLoading: false,
      };
    //action on one records
    //add a new Record
    case "add/record":
      return {
        ...state,
        records: [action.payload, ...state.records],
        filteredRecords: [action.payload, ...state.records],
      };

    //delete one Record

    case "delete/record":
      return {
        ...state,

        records: state.records.filter((record) => record.id !== action.payload),
        filteredRecords: state.filteredRecords.filter(
          (record) => record.id !== action.payload
        ),
      };

    // operation on the records array
    //order by date
    case "orderDate/records":
      return {
        ...state,

        filteredRecords: [...state.records].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        ),
      };

    //order by calories number
    case "orderCalories/records":
      return {
        ...state,

        filteredRecords: [...state.records].sort(
          (a, b) => Number(b.calories) - Number(a.calories)
        ),
      };

    //filter by meal type

    case "filterMeal/records":
      const filteredByMeal =
        action.payload === "all"
          ? state.records
          : state.records.filter((record) => record.meal === action.payload);

      return {
        ...state,
        currentMealFilter: action.payload,
        filteredRecords:
          filteredByMeal.length > 0 ? filteredByMeal : state.records,
      };
    case "fetch/oneRecord":
      return {
        ...state,
        record: action.payload,
        isLoading: false,
      };

    case "undo/records":
      return {
        ...state,
        filteredRecords: state.records,
      };

    default:
      throw new Error("Unknown action");
  }
}

function DataProvider({ children }) {
  const [{ records, isLoading, error, filteredRecords, record }, dispatch] =
    useReducer(reducerfn, initialState);

  //initiate fetching data on the first render
  useEffect(function () {
    fetchRecords();
  }, []);

  //fetching the records
  async function fetchRecords() {
    dispatch({ type: "fetch/start" });
    try {
      const data = await getRecords();
      dispatch({ type: "fetch/success", payload: data });
    } catch (error) {
      dispatch({
        type: "fetch/error",
        payload: "Error getting all the records",
      });
    }
  }

  // add record
  async function addNewRecord(record) {
    try {
      const data = await addOneRecord(record);
      dispatch({ type: "add/record", payload: data });
    } catch (error) {
      dispatch({ type: "fetch/error", payload: "Error Adding new Record" });
    }
  }

  //delete record

  async function removeRecord(id) {
    try {
      await deleteRecord(id);
      dispatch({ type: "delete/record", payload: id });
    } catch {
      dispatch({ type: "fetch/error", payload: "Error deleting the record" });
    }
  }

  //Get one record Data

  const loadRecordData = useCallback(async function (id) {
    dispatch({ type: "fetch/start" });

    try {
      const data = await getRecordById(id);
      dispatch({ type: "fetch/oneRecord", payload: data });
    } catch (err) {
      dispatch({ type: "fetch/error", payload: err.message });
    }
  }, []);

  // order by date
  function handleOrderingByDate() {
    dispatch({ type: "orderDate/records" });
  }

  //order by calories
  function handleOrderingByCalories() {
    dispatch({ type: "orderCalories/records" });
  }

  function handleFilteringByMeals(meal) {
    dispatch({ type: "filterMeal/records", payload: meal });
  }

  function handleUndo() {
    dispatch({ type: "undo/records" });
  }

  //   function getRecord(id) {
  //     dispatch({ type: "get/record", payload: id });
  //   }

  return (
    <DataContext.Provider
      value={{
        records,
        filteredRecords,
        isLoading,
        error,
        fetchRecords,
        addNewRecord,
        removeRecord,
        handleOrderingByDate,
        handleOrderingByCalories,
        handleFilteringByMeals,
        handleUndo,
        loadRecordData,
        record,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };
