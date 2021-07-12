import React from 'react';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('userDetails'));

  if (user === null) {
    return <Redirect to="/login" />;
  }

  return <div>And This is the Dashboard</div>;
};

export default Dashboard;
