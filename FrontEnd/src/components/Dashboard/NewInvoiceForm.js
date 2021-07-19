import React from 'react';

const Form = ({ setForm }) => {
  
  const inputClass =
    'w-full h-10 transition-colors duration-300 pl-2 rounded-md dark:bg-item-darkbg dark:border-all-darkbg border-gray-300 border-2 focus:border-all-bp dark:focus:border-all-bp focus:outline-none';

  return (
    <div className="md:w-element flex flex-col justify-between min-h-screen">
      <div className="mx-8 mt-8 overflow-y-scroll">
        <div className="text-3xl font-bold">Create Invoice</div>
        <section className="mt-6">
          <div className="text-sm text-all-bp font-bold">Bill From</div>
          <div className="mt-4">
            <div className="text-xs">Street Address</div>
            <div className="mt-3 mr-10">
              <input className={inputClass} />
            </div>
          </div>
        </section>
      </div>
      <div className="sticky mx-8 flex justify-between pb-8">
        <div
          onClick={() =>
            setForm(
              'z-10 max-w-full absolute inset-y-0 w-screen transform -translate-x-full transition duration-300 ease-in-out'
            )
          }
          className="shadow-lg cursor-pointer self-center bg-item-lightbg font-bold dark:bg-item-darkbg px-4 py-4 rounded-3xl transform hover:scale-105 duration-300"
        >
          Discard
        </div>
        <div className="shadow-lg cursor-pointer self-center transform hover:scale-105 duration-300 bg-all-bp text-white font-bold rounded-3xl">
          <div className="py-4 px-4">Save</div>
        </div>
      </div>
    </div>
  );
};

const NewInvoiceForm = ({ form, setForm }) => {
  return (
    <div className={form}>
      <div className="flex mt-16 md:mt-0">
        <div className="flex-grow md:flex-grow-0 transition-colors duration-300 rounded-r-2xl md:ml-24 bg-all-lightbg dark:bg-all-darkbg dark:text-white w-max min-h-screen">
          <Form setForm={setForm} />
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
