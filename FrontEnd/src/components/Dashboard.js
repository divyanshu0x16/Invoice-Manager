import React from 'react';
import { Redirect } from 'react-router-dom';
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('userDetails'));

  if (user === null) {
    return <Redirect to="/login" />;
  }

  jwt.verify(user.token, process.env.REACT_APP_SECRET, (err) => {
    if (err) {
      localStorage.clear();
    }
  });

  return <div>And This is the Dashboard</div>;
};

export default Dashboard;
