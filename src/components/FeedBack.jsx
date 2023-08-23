import React, { useState } from 'react'
import { app } from "../firebase"
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const db = getFirestore(app);

const FeedBack =() => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = e.target; 
      const name = form.elements.name.value;
      const phone = form.elements.phone.value;
      const email = form.elements.email.value;
      const title = form.elements.title.value;
      const message = form.elements.text.value;
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
      form.elements.name.value = '';
      form.elements.phone.value = '';
      form.elements.email.value = '';
      form.elements.title.value = '';
      form.elements.text.value = '';
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error adding feedback:', error);
    }
  };
  return (
        <div className='h-[550px] sm:h-[520px] xl:h-max mt-[80px]'>          
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
                    placeholder='Овог,нэр'/>
                </div>
                <div className="relative" data-te-input-wrapper-init>
                  <input
                    type="email"
                    name="email"
                    className="peer bg-[#F2F2F2] text-[#fff] p-[10px] text-[12px] bg-opacity-10 block w-full rounded-lg border-0 placeholder-[#fff]"
                    id="exampleInput124"
                    aria-describedby="emailHelp124"
                    placeholder='Имэйл'/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[10px] mb-[8px]">
              <div className="relative" data-te-input-wrapper-init>
                  <input
                    type="number"
                    name='phone'
                    className="peer bg-[#F2F2F2] text-[#fff] p-[10px] text-[12px] bg-opacity-10 block w-full rounded-lg border-0 placeholder-[#fff]"
                    id="exampleInput123"
                    aria-describedby="emailHelp123"
                    placeholder='Утас'/>
                </div>
                <div className="relative" data-te-input-wrapper-init>
                  <input
                    type="text"
                    name='text'
                    className="peer bg-[#F2F2F2] text-[#fff] p-[10px] text-[12px] bg-opacity-10 block w-full rounded-lg border-0 placeholder-[#fff]"
                    id="exampleInput124"
                    aria-describedby="emailHelp124"
                    placeholder='Сонгоно уу'
                    />
                </div>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                type='text'
                name='title'
                className="peer bg-[#F2F2F2] text-[#fff] p-[10px] text-[12px] bg-opacity-10 block w-full rounded-lg border-0 placeholder-[#fff]"
                id="exampleFormControlTextarea13"
                rows={+"3"}
                placeholder='Санал хүсэлтийн дэлгэрэнгүй'></textarea>
            </div>
            {isSubmitted && (
            <div className="text-green-500 mb-4">Feedback submitted successfully!</div>
          )}
              <div className='flex justify-center'>
              <button
                type="submit"
                className="w-[160px] h-[38px] center rounded-lg bg-[#D0A616] text-[14px] font-medium uppercase leading-normal text-white hover:opacity-70"
                data-te-ripple-color="light">
               ХҮСЭЛТ ИЛГЭЭХ
              </button>
              </div>
            </form>
            <div className=''>
              <h2 className='text-[32px] font-500 mb-[16px] text-[#fff]'>Санал хүсэлт илгээх</h2>
              <p className='text-[16px] font-400 text-[#fff] w-full lg:w-[620px]'>Та манай бүтээгдэхүүн үйлчилгээтэй холбоотой санал хүсэлтээ дараах формоор илгээнэ үү. Манай мэдээллийн ажилтан таны бөглөсөн мэдээллийн дагуу 24 цагийн дотор эргүүлэн холбоо барих болно.</p>
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