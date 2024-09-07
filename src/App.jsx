import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import StudentsList from "./pages/StudentsList";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import store from "./redux/redux";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/list" element={<StudentsList />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
