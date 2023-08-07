import React from 'react';
import Posts from '../Posts/Posts';
import { useLocation, useParams } from 'react-router-dom';

const News = () => {
  const location = useLocation();
  const { type } = useParams();
  return (
    <div className="flex">
      <div className="text-[14px] mt-[40px] uppercase">
        <div
          className="text-black w-[226px] mb-[79px] font-medium mb-5 cursor-pointer"
        >
          <a className={`${location.pathname.startsWith('/posts/news')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/news'>цаг үеийн мэдээлэл</a>
        </div>
        <div
          className="text-black w-[226px] mb-[69px] font-medium mb-5 cursor-pointer"
        >
          <a className={`${location.pathname.startsWith('/posts/corp-news') ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/corp-news'>байгууллагын мэдээ</a>
        </div>
        <div
          className="text-black w-[246px] mr-[102px] font-medium mb-5 cursor-pointer"
        >
          <a className={`${location.pathname.startsWith('/posts/social-resp')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/social-resp'>нийгмийн хариуцлага</a>
        </div>
      </div>
      <div>
        <Posts type={`${type}`} urlType='posts' />
      </div>
    </div>
  );
};

export default News;