import React,{useState} from 'react';
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const itemCount = 1; // Значение количества продуктов в корзине
  
  return (
    <div className='header flex justify-around pt-1'>
      <div className='  pt-2 mr-2 ' onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-customgray">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      </div>
      <div className='w-min '>
        <h1 className='mt-2  text-customgreen font-pacifico text-2xl text-center font-medium  leading-none'>Магазинчик на Мелитопольской</h1>
     <div className='flex justify-center pr-3 w-max  '> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 pb-1 text-customgreen">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <p className='text-xs'>Караганда 08:00 - 22:00</p>
    </div>  

      </div>
      <div className="flex items-center  ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 pl-0.5 pr-4 h-9 m-2 text-white bg-customgreen rounded-lg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        {itemCount > 0 && (
          <div className="bg-customgreen absolute ml-7 text-white rounded-full w-3 h-3 flex items-center justify-center">
            {itemCount}
          </div>
        )}
      </div>
      {sidebarOpen && <Sidebar onClose={toggleSidebar}  />}
    </div>
  );
};

export default Header;
