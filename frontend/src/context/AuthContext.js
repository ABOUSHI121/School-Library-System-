import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser, getUserProfile } from '../services/api';

// Create context
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await getUserProfile(token);
          setUser(res);
        } catch (err) {
          console.error(err);
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const register = async (formData) => {
    try {
      const res = await registerUser(formData);
      localStorage.setItem('token', res.token);
      const user = await getUserProfile(res.token);
      setUser(user);
      navigate('/profile');
    } catch (err) {
      console.error(err);
    }
  };

  const login = async (formData) => {
    try {
      const res = await loginUser(formData);
      localStorage.setItem('token', res.token);
      const user = await getUserProfile(res.token);
      setUser(user);
      navigate('/profile');
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}
