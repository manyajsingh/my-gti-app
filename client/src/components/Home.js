import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'; // Import the CSS for styling

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="home-container">
      <h1>Data List</h1>
      <ul className="data-list">
        {data.map(item => (
          <li key={item._id} className="data-item">
            <strong>Name:</strong> {item.name}<br />
            <strong>Email:</strong> {item.email}<br />
            <strong>Message:</strong> {item.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
