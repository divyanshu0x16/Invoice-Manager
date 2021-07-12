import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector((state) => state);
  console.log(user);
  return <div>And This is the Dashboard</div>;
};

export default Dashboard;
