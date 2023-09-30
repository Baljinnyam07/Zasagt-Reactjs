import React from 'react';
import Posts from '../Posts/Posts';
import { useLocation, useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const News = () => {
  const location = useLocation();
  const { type } = useParams();
  return (
      <div className="xl:flex divide-x">
      <div className="text-[14px] uppercase xl:block flex  divide-x">
        <div
          className="text-black w-full xl:w-[460px] font-medium mb-5 cursor-pointer border-b xl:py-[40px]"
        >
          <a className={`xl:pl-[130px] p-4 xl:p-0 text-center xl:text-start flex gap-2 ${location.pathname.startsWith('/posts/news')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/news'><FormattedMessage id='currentNews'/>{location.pathname === '/posts/news' && <div className='w-[8px] xl:block hidden h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
        <div
          className="text-black w-full p-4 xl:p-0 xl:w-[460px] font-medium mb-5 cursor-pointer border-b xl:py-[40px]"
        >
          <a className={`xl:pl-[130px] flex gap-2 text-center xl:text-start  ${location.pathname.startsWith('/posts/corp-news') ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/corp-news'><FormattedMessage id='comNews'/>{location.pathname === '/posts/corp-news' && <div className='w-[8px] xl:block hidden h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
        <div
          className="text-black w-full p-4 xl:p-0 xl:w-[460px] font-medium mb-5 cursor-pointer border-b xl:py-[40px]"
        >
          <a className={`xl:pl-[130px] flex gap-2 text-center xl:text-start  ${location.pathname.startsWith('/posts/social-resp')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/social-resp'><FormattedMessage id='socialRes'/>{location.pathname === '/posts/social-resp' && <div className='w-[8px] xl:block hidden h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
      </div>
      <div className='px-[24px]'>
        <Posts type={`${type}`} urlType='posts' />
      </div>
    </div>
  );
};

export default News;