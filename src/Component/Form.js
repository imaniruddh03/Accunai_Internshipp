import React, { useState } from 'react';

import '../App.css'

const Form = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    htmlCssProficiency: 'Beginner',
    reactProficiency: 'Beginner',
    wordpressProficiency: 'Beginner',
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onFormSubmit(formData)
  };



  return (
    <div>
      <h2>Form Page</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={changeHandler} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={changeHandler} required />

        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={changeHandler} />

        <label>University Name:</label>
        <input type="text" name="university" value={formData.university} onChange={changeHandler} required />

        <label>HTML/CSS Proficiency Level:</label>
        <div>
          {['Beginner', 'Intermediate', 'Advanced', "I don't know"].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="htmlCssProficiency"
                value={option}
                checked={formData.htmlCssProficiency === option}
                onChange={changeHandler}
              />
              {option}
            </label>
          ))}
        </div>  

        <label>React.js Proficiency Level:</label>
        <div>
          {['Beginner', 'Intermediate', 'Advanced', "I don't know"].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="reactProficiency"
                value={option}
                checked={formData.reactProficiency === option}
                onChange={changeHandler}
              />
              {option}
            </label>
          ))}
        </div>

        <label>WordPress Proficiency Level:</label>
        <div>
          {['Beginner', 'Intermediate', 'Advanced', "I don't know"].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="wordpressProficiency"
                value={option}
                checked={formData.wordpressProficiency === option}
                onChange={changeHandler}
              />
              {option}
            </label>
          ))}
        </div>

        <button type="button" className='btn' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
