import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/redux";
import "./StudentsList.css";

const StudentsList = () => {
  const { students, searchQuery } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="students-list-container">
      <h2>Guruhdagilar ro'yxati</h2>
      <input
        type="text"
        placeholder="Qidirish..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
      <table>
        <thead>
          <tr>
            <th>Ism</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">Hech narsa topilmadi</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
