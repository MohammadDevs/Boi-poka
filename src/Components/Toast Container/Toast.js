// toastHelper.js
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import React from "react";

// ekbar render korlei hobe
const div = document.createElement("div");
document.body.appendChild(div);
ReactDOM.createRoot(div).render(
  <ToastContainer position="top-center" autoClose={2000} />
);

// success toast
export const showSuccess = (msg) => {
  toast.success(msg);
};

// error toast
export const showError = (msg) => {
  toast.error(msg);
};

// info toast (optional)
export const showInfo = (msg) => {
  toast.info(msg);
};
