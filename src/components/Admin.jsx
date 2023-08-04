import React from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <>
       <div className="bg-[#f5f6f8]  text-center leading-7 font-sans bg-[#eeeff3]">
     
     <div className={`flex h-[70px] bg-[#006cff] items-center text-[#fff] font-sans text-[25px]  `}>
     <div className="text-[20px] w-full flex justify-end items-center ">
    </div>
     </div>
   <div className="flex">
     <div className="w-[300px] bg-[#fff] text-[14px] text-[#6e768e] h-screen p-4 px-8">
          <Link className="flex mt-6 text-[#006cff]" to="/admin">Dashboard</Link>
         <br />
         <Link className="flex" to="/admin/posts/news">Manage News</Link>
         <br/>
         <Link className="flex" to="/admin/mechanical/mining">Contact-Us</Link>
         <br/>
         <Link className="flex" to="/admin/humanity">Humanity</Link>
         <br/>
          <div>
          </div>
     </div>
     <div>
        <h1 className='text-[#6e768e] text-[40px] flex font-[500] p-10'>Welcome To Admin</h1>
      </div>
   </div>
 </div>
    </>
  );
}

export default Admin;


