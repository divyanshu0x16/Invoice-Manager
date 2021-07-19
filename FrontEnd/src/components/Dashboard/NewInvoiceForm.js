import React from 'react';

const Form = () => {
  return <div className="md:w-element">Form Goes Here</div>;
};

const NewInvoiceForm = ({ form, setForm }) => {
  return (
    <div className={form}>
      <div className="flex mt-16 md:mt-0">
        <div className="flex-grow md:flex-grow-0 transition-colors duration-300 rounded-r-2xl md:ml-24 bg-white dark:bg-all-darkbg dark:text-white w-max min-h-screen">
          <Form />
        </div>
        <div
          onClick={() =>
            setForm(
              'z-10 max-w-full absolute inset-y-0 w-screen transform -translate-x-full transition duration-300 ease-in-out'
            )
          }
          className="hidden md:block flex-grow backdrop-filter backdrop-brightness-50"
        ></div>
      </div>
    </div>
  );
};

export default NewInvoiceForm;
