/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState, useImperativeHandle } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Modal = React.forwardRef((_, ref) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleModal,
    };
  });

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-20 inset-0 overflow-y-auto"
        open={open}
        onClose={setOpen}
      >
        <div className="flex px-4 text-center sm:block flex-col justify-center items-center mx-auto min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 backdrop-filter backdrop-blur-lg" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <a
              href="https://github.com/divyanshu0x16/Invoice-Tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none focus:outline-none"
            >
              <div className="inline-block align-bottom rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="flex flex-row place-content-center">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="py-2 px-2 border-0 border-transparent outline-none focus:outline-none text-transparent bg-clip-text bg-gradient-to-br font-semibold text-6xl from-green-400 to-blue-500 transform duration-300 hover:scale-110"
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </a>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
});

export default Modal;
