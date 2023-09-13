import React from 'react';
import Posts from '../Posts/Posts';
import { useLocation, useParams } from 'react-router-dom';

const News = () => {
  const location = useLocation();
  const { type } = useParams();
  return (
      <div className="flex divide-x">
      <div className="text-[14px] uppercase xl:block hidden">
        <div
          className="text-black w-[460px] font-medium mb-5 cursor-pointer border-b py-[40px]"
        >
          <a className={`pl-[130px] flex gap-2 ${location.pathname.startsWith('/posts/news')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/news'>цаг үеийн мэдээлэл{location.pathname === '/posts/news' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
        <div
          className="text-black w-[460px] font-medium mb-5 cursor-pointer border-b py-[40px]"
        >
          <a className={`pl-[130px] flex gap-2 ${location.pathname.startsWith('/posts/corp-news') ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/corp-news'>байгууллагын мэдээ{location.pathname === '/posts/corp-news' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
        <div
          className="text-black w-[460px] font-medium mb-5 cursor-pointer border-b py-[40px]"
        >
          <a className={`pl-[130px] flex gap-2 ${location.pathname.startsWith('/posts/social-resp')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/social-resp'>нийгмийн хариуцлага{location.pathname === '/posts/social-resp' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
      </div>
      <div className='px-[24px]'>
        <Posts type={`${type}`} urlType='posts' />
      </div>
    </div>
  );
};

export default News;