import React from 'react';
import { Redirect } from 'react-router-dom';
import Filter from './Filter';

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
        <div className="justify-self-start">
          <div className="font-bold text-2xl">Invoices</div>
          <div className="text-xs pt-0.5">You have 5 total invoices.</div>
        </div>
        <div className="justify-self-end grid grid-cols-2">
          <div>
            <Filter/>
          </div>
          <div className="cursor-pointer bg-all-bp text-white my-auto px-3 rounded-full font-bold transform hover:scale-105 duration-300">
            <div className="py-2 flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 pr-1 pb-0.5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              New
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
