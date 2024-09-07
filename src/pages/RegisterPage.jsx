import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/redux";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent({ name, email }));
    setName("");
    setEmail("");
  };

  return (
    <div className="register-container">
      <h2>O'quvchini ro'yxatga olish</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ism"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Ro'yxatga olish</button>
      </form>
    </div>
  );
};

export default RegisterPage;
