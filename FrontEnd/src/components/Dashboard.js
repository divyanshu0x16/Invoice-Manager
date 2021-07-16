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

  return (
    <div className="mx-6 md:mx-auto">
      <div className="md:pt-24 pt-8 grid grid-cols-2">
          <div className="justify-self-start">Invoices</div>
          <div className="justify-self-end">Create button</div>
      </div>
    </div>
  );
};

export default Dashboard;
