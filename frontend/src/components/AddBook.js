import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { addBook } from '../services/bookService';

function AddBook() {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
  });

  const { title, author, category } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBook(formData, user.token);
      // Reset form after successful submission
      setFormData({ title: '', author: '', category: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={onSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={title} onChange={onChange} />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="author" value={author} onChange={onChange} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" name="category" value={category} onChange={onChange} />
        </label>
        <br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
