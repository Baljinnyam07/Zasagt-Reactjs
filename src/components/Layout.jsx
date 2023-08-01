import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import FeedBack from './FeedBack';
import AppContainer from './AppContainer';
import { Outlet } from "react-router-dom";


const Layout =()=> {
  return (
    <div>
        <Header/>
      <div className="">
        <AppContainer>
        <Outlet/>

        </AppContainer>
      </div>
        <div className='bg-[#23356B]'>
          <AppContainer>
          <FeedBack/>
          </AppContainer>
        </div>
        <AppContainer>
        <Contact/>
        </AppContainer>
        <AppContainer>
        <Footer/>
        </AppContainer>
    </div>
  )
}

export default Layout