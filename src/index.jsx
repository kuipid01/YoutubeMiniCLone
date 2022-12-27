import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { store } from "./redux/store";
// import { store } from "./redux/store";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store= {store}>

    <Router>
      <Navbar/>
      
        <App />
        <Footer />
      </Router>
      </Provider>
  </React.StrictMode>
);
