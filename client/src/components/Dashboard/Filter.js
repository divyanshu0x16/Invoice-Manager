/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Filter = ({ onFilter }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="flex flex-row w-full text-sm font-bold focus:outline-none">
              Filter
              {open ? (
                <ChevronUpIcon
                  className="mr-1 ml-2 h-5 w-5 text-all-bp"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="mr-1 ml-2 h-5 w-5 text-all-bp"
                  aria-hidden="true"
                />
              )}
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-navbar-darkbg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/#"
                      onClick={() => onFilter('all')}
                      className={classNames(
                        active
                          ? 'dark:text-white font-bold bg-gray-200 dark:bg-all-darkbg'
                          : 'dark:text-white font-bold',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      All
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/#"
                      onClick={() => onFilter('paid')}
                      className={classNames(
                        active
                          ? 'dark:text-white font-bold bg-gray-200 dark:bg-all-darkbg'
                          : 'dark:text-white font-bold',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Paid
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/#"
                      onClick={() => onFilter('pending')}
                      className={classNames(
                        active
                          ? 'dark:text-white font-bold bg-gray-200 dark:bg-all-darkbg'
                          : 'dark:text-white font-bold',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Pending
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Filter;
