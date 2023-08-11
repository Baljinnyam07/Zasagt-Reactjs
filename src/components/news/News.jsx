import React from 'react';
import Posts from '../Posts/Posts';
import { useLocation, useParams } from 'react-router-dom';
import AppContainer from '../AppContainer';

const News = () => {
  const location = useLocation();
  const { type } = useParams();
  console.log('type:',type)
  return (
    <AppContainer>
      <div className="flex">
      <div className="text-[14px] mt-[40px] uppercase">
        <div
          className="text-black w-[226px] mb-[79px] font-medium mb-5 cursor-pointer"
        >
          <a className={`flex gap-2 ${location.pathname.startsWith('/posts/news')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/news'>цаг үеийн мэдээлэл{location.pathname === '/posts/news' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
        <div
          className="text-black w-[226px] mb-[69px] font-medium mb-5 cursor-pointer"
        >
          <a className={`flex gap-2 ${location.pathname.startsWith('/posts/corp-news') ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/corp-news'>байгууллагын мэдээ{location.pathname === '/posts/corp-news' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
        <div
          className="text-black w-[246px] mr-[102px] font-medium mb-5 cursor-pointer"
        >
          <a className={`flex gap-2 ${location.pathname.startsWith('/posts/social-resp')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/social-resp'>нийгмийн хариуцлага{location.pathname === '/posts/social-resp' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
      </div>
      <div>
        <Posts type={`${type}`} urlType='posts' />
      </div>
    </div>
    </AppContainer>
  );
};

export default News;