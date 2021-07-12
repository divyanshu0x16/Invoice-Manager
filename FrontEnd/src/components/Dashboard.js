import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
  const user = useSelector((state) => {
    return state;
  });

  if (Object.keys(user).length === 0 && user.constructor === Object) {
    return <Redirect to="/login" />;
  }

  return <div>And This is the Dashboard</div>;
};

export default Dashboard;
