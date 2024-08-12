import { useEffect, useState } from "react";

export function useLocalStorage(initialstate, key) {
  const [values, setValues] = useState(function () {
    const storedValues = JSON.parse(localStorage.getItem(key));

    // return storedValues ? storedValues : initialstate;
    if (storedValues) {
      return storedValues.map((record) => ({
        ...record,
        date: new Date(record.date),
      }));
    }
    return initialstate;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(values));
    },
    [key, values]
  );

  return [values, setValues];
}
