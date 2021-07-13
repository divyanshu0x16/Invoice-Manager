import React from 'react';

const Navbar = () => {
  return (
    <div className="md:rounded-r-2xl h-16 md:min-h-screen bg-navbar-bg">
      <div className="w-full md:w-24">
        <div className="grid md:grid-flow-row grid-flow-col md:min-h-screen">
          <div className="bg-logo-light rounded-r-2xl md:h-20 h-16 w-20 md:w-full">
            <div className="px-3 pt-1 md:px-4 md:pt-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-14 w-14"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="place-self-end">
            <div className="grid grid-flow-col md:grid-flow-row divide-x-2 divide-line-color md:divide-x-0 md:divide-y-2">
              <div className="pb-10 md:pb-2 pr-0 md:pr-10">switch</div>
              <div>user</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
