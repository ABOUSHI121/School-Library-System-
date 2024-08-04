import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Registration() {
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { firstName, lastName, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div>
      <h2>Registration Page</h2>
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
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={onChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
