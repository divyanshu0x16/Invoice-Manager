import React from 'react';

const NewInvoiceForm = ({ form, setForm }) => {
  return (
    <div className={form}>
      <div className="flex mt-16 md:mt-0">
        <div className="transition-colors duration-300 rounded-r-2xl md:ml-24 bg-white dark:bg-all-darkbg dark:text-white w-max min-h-screen">
          Form Goes Here
        </div>
        <div
          onClick={() =>
            setForm(
              'z-10 max-w-full absolute inset-y-0 w-screen transform -translate-x-full transition duration-300 ease-in-out'
            )
          }
          className="flex-grow backdrop-filter backdrop-brightness-50"
        ></div>
      </div>
    </div>
  );
};

export default NewInvoiceForm;
