import React from 'react';

const FullEntryField = ({ inputClass, title }) => {
  return (
    <div className="mt-4">
      <div className="text-xs">{title}</div>
      <div className="mt-3 mr-10">
        <input className={inputClass} />
      </div>
    </div>
  );
};

const HalfEntryFields = ({ inputClass, titleOne, titleTwo }) => {
  return (
    <div className="grid grid-cols-2 mt-4 text-xs">
      <div className>
        <div className="text-xs">{titleOne}</div>
        <div className="mt-3 mr-6">
          <input className={inputClass} />
        </div>
      </div>
      <div>
        <div className="text-xs">{titleTwo}</div>
        <div className="mt-3 mr-10 text-xs">
          <input className={inputClass} type="number" />
        </div>
      </div>
    </div>
  );
};

const Form = ({ setForm }) => {
  const inputClass =
    'w-full h-10 text-xs font-bold transition-colors duration-300 pl-2 rounded-md dark:bg-item-darkbg dark:border-all-darkbg border-gray-300 border-2 focus:border-all-bp dark:focus:border-all-bp focus:outline-none';

  return (
    <div className="md:w-element flex flex-col justify-between min-h-screen">
      <div className="mx-8 mt-8 overflow-y-scroll">
        <div className="text-3xl font-bold">Create Invoice</div>
        <section className="mt-6">
          <div className="text-sm text-all-bp font-bold">Bill From</div>
          <FullEntryField inputClass={inputClass} title="Street Address" />
          <HalfEntryFields
            inputClass={inputClass}
            titleOne="City"
            titleTwo="Post Code"
          />
          <FullEntryField inputClass={inputClass} title="Country" />
        </section>

        <section className="mt-6">
          <div className="text-sm text-all-bp font-bold">Bill To</div>
          <FullEntryField inputClass={inputClass} title="Client's Name" />
          <FullEntryField inputClass={inputClass} title="Client's Email" />
          <FullEntryField inputClass={inputClass} title="Street Address" />
          <HalfEntryFields
            inputClass={inputClass}
            titleOne="City"
            titleTwo="Post Code"
          />
          <FullEntryField inputClass={inputClass} title="Country" />
          <FullEntryField inputClass={inputClass} title="Description" />
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
        <div className="mr-14 shadow-lg cursor-pointer self-center transform hover:scale-105 duration-300 bg-all-bp text-white font-bold rounded-3xl">
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
        <div className="flex-grow md:flex-grow-0 transition-colors duration-300  md:ml-24 bg-all-lightbg dark:bg-all-darkbg dark:text-white w-max min-h-screen">
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
