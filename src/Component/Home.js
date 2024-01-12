import React from 'react';
import '../App.css'

const HomePage = ({ userList, onDelete }) => {
  
  const users = userList ?? [];


  return (
    <div className='home'>
      <h2>User Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>University</th>
            <th>HTML/CSS Proficiency</th>
            <th>React.js Proficiency</th>
            <th>WordPress Proficiency</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.university}</td>
              <td>{user.htmlCssProficiency}</td>
              <td>{user.reactProficiency}</td>
              <td>{user.wordpressProficiency}</td>
              <td>
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;

