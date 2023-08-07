import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [bgImage, setBgImage] = useState('');
  useEffect(() => {
    const url = location.pathname;
    if (url === '/') {
      setBgImage('');
    } else if (url.startsWith('/project/')) {
      setBgImage('https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/tusluud-transformed-bw-real.png?alt=media&token=763d19a2-0a2d-43e3-abaf-79872e9c2d4a');
    } else if (url.startsWith('/posts/')) {
      setBgImage('https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/hamtran-ajillah-transformed-bw.png?alt=media&token=a504a6c1-d35f-4f09-8fad-a451fb8b23d5');
    } else if (url.startsWith('/mechanical/')) {
      setBgImage('https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/hamtran-ajillah-transformed-bw%20(2).png?alt=media&token=32e5ef2c-6d20-4b87-b5af-a96eaa1dd0bb');
    }else if (url.startsWith('/about/')) {
      setBgImage('https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/bw%20(3).png?alt=media&token=a57cda8e-e75c-4cc6-98fb-f04bdfe5833a');
    }else if (url.startsWith('/humanity/')) {
      setBgImage('https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/hunii-nuuts-transformed-bw%20(2).png?alt=media&token=51971a5f-53ff-43d6-827e-f739d58515ff');
    }else {
      setBgImage('default-image-url');
    }
  }, [location.pathname]);

  console.log('image:', bgImage);

  return (
    <>
      <nav className="flex items-start w-full justify-between px-[40px] h-[450px]"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
      </nav>
    </>
  )
}

export default Navbar;