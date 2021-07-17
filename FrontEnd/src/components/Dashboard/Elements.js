import React from 'react';

export const Paid = ({ date, name, amount }) => {
  return (
    <div>
      <div className="transition-colors duration-300 bg-white dark:bg-navbar-darkbg px-8 py-3 my-4 rounded-lg hover:border-all-bp border-transparent border-2 cursor-pointer">
        <div className="grid grid-cols-4">
          <div className="font-bold text-sm">
            <div className="py-3">{`Due ${date}`}</div>
          </div>
          <div className="font-normal text-sm">
            <div className="py-3">{name}</div>
          </div>
          <div className="justify-self-center font-bold text-sm">
            <div className="py-3">
              <i className="fas fa-rupee-sign"></i>
              {amount}
            </div>
          </div>
          <div className="justify-self-end">
            <div className="py-1">
              <div className="transition-colors duration-300 bg-paid-bg dark:bg-paid-darkbg text-paid-text font-bold text-sm py-2 px-9 rounded-lg">
                Paid
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Pending = ({ date, name, amount }) => {
  return (
    <div>
      <div className="transition-colors duration-300 bg-white dark:bg-navbar-darkbg px-8 py-3 my-4 rounded-lg hover:border-all-bp border-transparent border-2 cursor-pointer">
        <div className="grid grid-cols-4">
          <div className="font-bold text-sm">
            <div className="py-3">{`Due ${date}`}</div>
          </div>
          <div className="font-normal text-sm">
            <div className="py-3">{name}</div>
          </div>
          <div className="justify-self-center font-bold text-sm">
            <div className="py-3">
              <i className="fas fa-rupee-sign"></i>
              {amount}
            </div>
          </div>
          <div className="justify-self-end">
            <div className="py-1">
              <div className="transition-colors duration-300 bg-pending-bg dark:bg-pending-darkbg text-pending-text font-bold text-sm py-2 px-5 rounded-lg">
                Pending
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};