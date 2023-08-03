import React from 'react';
import { useParams } from 'react-router-dom';

const Navbar = () => {
  const type  = useParams();
  const { productId } = type

  let image;
  if (productId === 'project') {
    image = 'https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/tusluud-transformed-bw-real.png?alt=media&token=763d19a2-0a2d-43e3-abaf-79872e9c2d4a';
  } else if (productId === 'about') {
    image = 'https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/bw%20(1).png?alt=media&token=16d527ea-bed5-456d-945f-83d0ed42cb8f';
  } else if (productId && type.startsWith('news')) {
    image = 'default-image-url-news';
  } else if (productId && type.startsWith('corp-news')) {
    image = 'default-image-url-corp-news';
  } else if (productId && type.startsWith('social-resp')) {
    image = 'default-image-url-social-resp';
  } else {
    image = 'default-image-url';
  }
  return (
    <>
      <nav className="flex items-start w-full justify-between px-[40px] h-[450px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0 -160px',
          backgroundSize: 'cover',
        }}
      >
      </nav>
    </>
  )
}

export default Navbar;