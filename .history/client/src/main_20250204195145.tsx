import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./app/services/baseApi.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
);
