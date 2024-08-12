import { useEffect, useReducer } from "react";

function recordsReducerfn(state, action) {
  switch (action.type) {
    case "add-records":
      return [action.payload, ...state];
    case "delete-records":
      return action.payload;
    case "orderedBy-date":
      return action.payload;
    case "orderedBy-meal":
      return action.payload;
    default:
      throw new Error("Unknown Action");
  }
}

export function useLocalStorageReducer(initialstate, key) {
  const [values, dispatch] = useReducer(
    recordsReducerfn,
    initialstate,
    function (initial) {
      const storedValues = JSON.parse(localStorage.getItem(key));

      // return storedValues ? storedValues : initialstate;
      if (storedValues) {
        return storedValues.map((record) => ({
          ...record,
          date: new Date(record.date),
        }));
      }
      return initial;
    }
  );

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(values));
    },
    [key, values]
  );

  return [values, dispatch];
}
