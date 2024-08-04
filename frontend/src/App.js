import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/" element={<h1>Hello, World!</h1>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
