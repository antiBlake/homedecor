import { useState } from 'react';

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="Nav">
      <div className="hidden web-nav lg:flex font-baloo font-bold text-gray-600 justify-evenly border-b-2">
        <div className="logo w-2/12 sm:w-1/12">
          <img src="images/logo.svg" alt="logo" />
        </div>
        <div className="nav-1 flex flex-row w-4/12  items-center justify-evenly text-sm">
          <li className="list-none cursor-pointer">Home</li>
          <li className="list-none cursor-pointer">Products</li>
          <li className="list-none cursor-pointer">About Us</li>
          {/* '' */}
        </div>
        <div className="nav-2 flex flex-row items-center justify-evenly w-3/12">
          <div className="searchh flex flex-row items-center justify-evenly">
            <div className={'cursor-pointer'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>

            <div className="search mx-4">Search</div>
          </div>
          <div className={'cursor-pointer'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>

          <div className={'cursor-pointer'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div className="sign-up-btn bg-emerald-700 px-6 py-4 text-white rounded-lg cursor-pointer">
            Sign Up
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="mobile lg:hidden">
        <div className="mobile-nav   flex font-baloo font-bold text-gray-600  m-auto justify-between items-center w-10/12">
          <div className="logo w-3/12 ">
            <img src="images/logo.svg" alt={'logo'} />
          </div>
          <div className="bar" onClick={handleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <div
          className={` ${
            menu ? 'h-32' : 'h-0'
          } menu my-4 grid gap-2  transition-all delay-300 duration-500 overflow-hidden text-center font-baloo font-bold text-sm`}
        >
          <li className="list-none">Home</li>
          <li className="list-none">Products</li>
          <li className="list-none">About Us</li>
        </div>
      </div>
    </div>
  );
};

export default Nav;
