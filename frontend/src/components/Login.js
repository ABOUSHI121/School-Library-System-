import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={onSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
