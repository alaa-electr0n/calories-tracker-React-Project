import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RecordProvider } from "./customHooks/RecordContext.jsx";
import { DataProvider } from "./customHooks/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecordProvider>
      <DataProvider>
        <App className="App" />
      </DataProvider>
    </RecordProvider>
  </React.StrictMode>
);
