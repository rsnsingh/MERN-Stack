// CONNECT TO MONGODB    App.js
import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/students')
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Student List</h1>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Course</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.rollno}>
              <td>{s.rollno}</td>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
