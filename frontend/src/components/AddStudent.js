import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { addStudent } from '../services/studentService';

function AddStudent() {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const { firstName, lastName, email } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStudent(formData, user.token);
      // Reset form after successful submission
      setFormData({ firstName: '', lastName: '', email: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={onSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={firstName} onChange={onChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={lastName} onChange={onChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={onChange} />
        </label>
        <br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
