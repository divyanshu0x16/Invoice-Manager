import React from 'react';
import user from '../utils/user.png';
import { ThemeContext } from '../utils/themeContext';

const Navbar = ({ modalToggle }) => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="sticky top-0 z-20 md:rounded-r-2xl h-16 md:min-h-screen bg-navbar-bg dark:bg-navbar-darkbg">
      <div className="w-full md:w-24">
        <div className="grid md:grid-flow-row grid-flow-col md:min-h-screen">
          <div className="bg-logo-light rounded-r-2xl md:h-20 h-16 w-20 md:w-full">
            <div className="px-3 pt-1 md:px-4 md:pt-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="place-self-end">
            <div className="grid grid-flow-col md:grid-flow-row">
              <div className="z-20 mt-1 md:mt-0 md:pl-8">
                {theme === 'dark' ? (
                  <div
                    onClick={() =>
                      setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer h-8 w-8 fill-current text-all-switch"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ) : (
                  <div
                    onClick={() =>
                      setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer h-8 w-8 fill-current text-all-switch"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="z-20 cursor-pointer mx-5 mb-3 md:mx-7 md:my-8">
                <img
                  src={user}
                  alt="user"
                  className="h-10"
                  onClick={() => modalToggle.current.toggleModal()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
