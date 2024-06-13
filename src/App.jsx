import React from 'react';

const App = () => {
  return (
    <div> <div className="main w-full h-screen bg-white">
    <nav className='  w-full h-[80px] bg-white'>
      <ul className='flex '>
        <li className='logo w-[50px] h-[50px] ml-12 mt-5 '></li>
        <li className='men ml-20 mt-9 text-xs font-semibold'>MEN</li>
        <li className='women ml-10 mt-9 text-xs font-semibold'>WOMEN</li>
        <li className='kids ml-10 mt-9 text-xs font-semibold'>KIDS</li>
        <li className='home ml-10 mt-9 text-xs font-semibold'>HOME&LIVING</li>
        <li className='beauty ml-10 mt-9 text-xs font-semibold'>BEAUTY</li>
        <li className='studio ml-10 mt-9 text-xs font-semibold'>STUDIO</li>
        <li className='new mt-7 text-red-400 text-[10px] font-semibold'>NEW</li>
        <input type="text "className='  mt-7 ml-16 h-[30px] w-[400px]' placeholder='Search for products,brands,and more' />
        <li className='profile ml-10 mt-9 text-xs font-semibold'>PROFILE</li>
        <li className='profile ml-10 mt-9 text-xs font-semibold'>WISHLIST</li>
        <li className='profile ml-10 mt-9 text-xs font-semibold'>BAG</li>
      </ul>
    </nav>
    <div className="page1 h-screen w-full bg-slate-50"></div>
   </div>
   </div>

   
  )
}

export default App