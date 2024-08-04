import React, { useEffect, useState, useContext } from 'react';
import { getStudents } from '../services/studentService';
import { AuthContext } from '../context/AuthContext';

function StudentList() {
  const { user } = useContext(AuthContext);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentsData = await getStudents(user.token);
      setStudents(studentsData);
    };

    fetchStudents();
  }, [user.token]);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.firstName} {student.lastName} ({student.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
