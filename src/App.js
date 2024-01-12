import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormPage from './Component/Form';
import HomePage from './Component/Home';
import './App.css'

const App = () => {
  const [userList, setUserList] = useState([]);


  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setUserList(JSON.parse(storedData));
    }
  }, []);

  const handleFormSubmit = (formData) => {
    const updatedUserList = userList.concat(formData);
    setUserList(updatedUserList);
    localStorage.setItem('formData', JSON.stringify(updatedUserList));

  };

  const handleDelete = (index) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this entry?');

    if (isConfirmed) {
      const updatedUserList = [...userList];
      updatedUserList.splice(index, 1);
      setUserList(updatedUserList);
      localStorage.setItem('formData', JSON.stringify(updatedUserList));
    }
  };

  return (
    <Router>
      <div className='app'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/form" element={<FormPage onFormSubmit={handleFormSubmit} />} />
          <Route path="/" element={<HomePage userList={userList} onDelete={handleDelete} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
