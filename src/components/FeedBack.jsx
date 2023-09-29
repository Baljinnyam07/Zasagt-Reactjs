import React, { useState } from 'react'
import { app } from "../firebase"
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { FormattedMessage, useIntl } from 'react-intl';

const db = getFirestore(app);

const FeedBack =() => {
  const [ setIsSubmitted] = useState(false);
  const intl = useIntl();
  const hidePromoNotif = (e) => {
    e.target.closest(".notif").classList.add("hidden");
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
  
      // Access form elements by their 'name' attributes
      const name = form.elements.name.value;
      const phone = form.elements.phone.value;
      const email = form.elements.email.value;
      const title = form.elements.title.value;
      const message = form.elements.message.value; // Updated to 'message' from 'text'
      const type = 'feedback';
  
      const feedbackData = {
        name,
        phone,
        email,
        title,
        message,
        timestamp: new Date().toISOString(),
        type,
      };
  
      const feedbackCollection = collection(db, 'feedbacks');
      await addDoc(feedbackCollection, feedbackData);
  
      // Reset form and show success notification
      form.reset();
      setIsSubmitted(true);
      document.querySelector("#promoSuccess").classList.remove("hidden");
    } catch (error) {
      console.error('Error adding feedback:', error);
      console.error('Error saving feedback:', error);
      document.querySelector("#promoFail").classList.remove("hidden");
    }
  };
  return (
        <div className='h-[550px] sm:h-[520px] xl:h-max'>   
        <div id="promoSuccess" className="notif backdrop-blur fixed hidden w-[calc(100%-100px)] box-border font-bold top-[60px] right-[50px] max-w-[512px] bg-[rgba(67,210,76,.5)] px-[24px] py-[30px] rounded-[8px] z-50">
        <div className="relative flex items-center gap-[16px]">
          <img src="/images/correct.svg" alt='correct'/>
          <span id="notif_success">
            <FormattedMessage id="feedback_success_message" defaultMessage="Таны мэдээллийг хүлээж авлаа." />
          </span>
          <img className="absolute top-[-14px] right-[-8px] cursor-pointer" onClick={(event) => hidePromoNotif(event)} src="/images/close.svg" alt='close'/>
        </div>
      </div>

      <div id="promoFail" className="notif backdrop-blur fixed hidden w-[calc(100%-100px)] box-border font-bold top-[50px] right-[50px] max-w-[512px] bg-[rgba(255,0,61,.32)] px-[24px] py-[30px] rounded-[8px] z-50">
        <div className="relative flex items-center gap-[16px]">
          <img src="/images/error.svg" alt='error'/>
          <span id="notif_fail">
            <FormattedMessage id="feedback_failed_message" defaultMessage="Алдаа гарлаа, та дахин оролдоно уу!" />
          </span>
          <img className="absolute top-[-14px] right-[-8px] cursor-pointer" onClick={(event) => hidePromoNotif(event)} src="/images/close.svg" alt='close'/>
        </div>
      </div>      
          <div className='py-[80px] px-[20px] xl:px-0  flex flex-col-reverse lg:flex-row gap-[24px] absolute'>
            <form className='w-full lg:w-[588px]' onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-2 gap-[10px] mb-[8px]">
                <div className="relative" data-te-input-wrapper-init>
                <input
                  type="text"
                  name="name"
                  className="peer bg-[#F2F2F2] text-[#fff] p-[10px] text-[12px] bg-opacity-10 block w-full rounded-lg border-0 placeholder-[#fff]"
                  id="exampleInput123"
                  aria-describedby="emailHelp123"
                  placeholder={intl.formatMessage({ id: 'name' })} // Use the FormattedMessage component here
                />
                </div>
                <div className="relative" data-te-input-wrapper-init>
                <input
                  type="text"
                  name="email"
                  className="peer bg-[#F2F2F2] text-[#fff] p-[10px] text-[12px] bg-opacity-10 block w-full rounded-lg border-0 placeholder-[#fff]"
                  id="exampleInput123"
                  aria-describedby="emailHelp123"
                  placeholder={intl.formatMessage({ id: 'email' })}// Use the FormattedMessage component here
                />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[10px] mb-[8px]">
              <div className="relative" data-te-input-wrapper-init>
                    <input
                      type="number"
                      name="phone"
                      className="peer bg-[#F2F2F2] text-[#fff] p-[10px] text-[12px] bg-opacity-10 block w-full rounded-lg border-0 placeholder-[#fff]"
                      id="exampleInput123"
                      aria-describedby="emailHelp123"
                      placeholder={intl.formatMessage({ id: 'phone' })}
                      />
                </div>
                <div className="relative" data-te-input-wrapper-init>
                    <input
                      type="text"
                      name="title"
                      className="peer bg-[#F2F2F2] text-[#fff] p-[10px] text-[12px] bg-opacity-10 block w-full rounded-lg border-0 placeholder-[#fff]"
                      id="exampleInput123"
                      aria-describedby="emailHelp123"
                      placeholder={intl.formatMessage({ id: 'title' })} // Use the FormattedMessage component here
                    />
                </div>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <textarea
                  type="text"
                  name='message'
                  className="peer bg-[#F2F2F2] text-[#fff] p-[10px] text-[12px] bg-opacity-10 block w-full rounded-lg border-0 placeholder-[#fff]"
                  id="exampleFormControlTextarea13"
                  rows={3} // You can use just the number 3
                  placeholder={intl.formatMessage({ id: 'feedbackDeta' })}
                  >
                </textarea>
              </div>
            </div>
              <div className='flex justify-center'>
              <button
                type="submit"
                className="w-[160px] h-[38px] center rounded-lg bg-[#D0A616] text-[14px] font-medium uppercase leading-normal text-white hover:opacity-70"
                data-te-ripple-color="light">
               <FormattedMessage id='feedbackReq'/>
              </button>
              </div>
            </form>
            <div className=''>
              <h2 className='text-[32px] font-[500] mb-[16px] text-[#fff]'><FormattedMessage id='feedbackSend'/></h2>
              <p className='text-[16px] font-400 text-[#fff] w-full lg:w-[620px]'><FormattedMessage id='feedbackTitle'/></p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="180%" viewBox="0 0 1344 430" fill="none">
          <defs>
            <linearGradient id="gradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="0.09" />
              <stop offset="70%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fillRule="evenodd" clipRule="evenodd" d="M0 133.574L1017.6 261.374L867.252 430H1157.9L1344 128.658L0 0V133.574Z" fill="url(#gradient)" />
        </svg>
        </div>
  )
}

export default FeedBack