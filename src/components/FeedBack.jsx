import React from 'react'
const FeedBack =() => {
  return (
        <div className='relative container mx-auto h-[430px] max-w-[1440px] mt-[80px]'>          
          <div className='py-[80px] grid grid-cols-2 gap-[24px] absolute'>
            <form className='w-[588px]'>
              <div className="grid grid-cols-2 gap-[10px] mb-[8px]">
                <div className="relative" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer bg-[#F2F2F2] text-[#fff] p-[10px] text-[12px] bg-opacity-10 block w-full rounded-lg border-0 placeholder-[#fff]"
                    id="exampleInput123"
                    aria-describedby="emailHelp123"
                    placeholder='Овог,нэр'/>
                </div>
                <div className="relative" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer bg-[#F2F2F2] text-[#fff] p-[10px] text-[12px] bg-opacity-10 block w-full rounded-lg border-0 placeholder-[#fff]"
                    id="exampleInput124"
                    aria-describedby="emailHelp124"
                    placeholder='Имэйл'/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[10px] mb-[8px]">
              <div className="relative" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer bg-[#F2F2F2] text-[#fff] p-[10px] text-[12px] bg-opacity-10 block w-full rounded-lg border-0 placeholder-[#fff]"
                    id="exampleInput123"
                    aria-describedby="emailHelp123"
                    placeholder='Утас'/>
                </div>
                <div className="relative" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer bg-[#F2F2F2] text-[#fff] p-[10px] text-[12px] bg-opacity-10 block w-full rounded-lg border-0 placeholder-[#fff]"
                    id="exampleInput124"
                    aria-describedby="emailHelp124"
                    placeholder='Сонгоно уу'
                    />
                </div>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                    className="peer bg-[#F2F2F2] text-[#fff] p-[10px] text-[12px] bg-opacity-10 block w-full rounded-lg border-0 placeholder-[#fff]"
                    id="exampleFormControlTextarea13"
                rows={+"3"}
                placeholder='Санал хүсэлтийн дэлгэрэнгүй'></textarea>
            </div>
    
              <button
                type="submit"
                className="inline-block w-[160px] h-[38px] ml-[200px] center rounded-lg bg-[#D0A616] text-[14px] font-medium uppercase leading-normal text-white"
                data-te-ripple-color="light">
               
               ХҮСЭЛТ ИЛГЭЭХ
               
              </button>
            </form>
            <div className=''>
              <h2 className='text-[32px] font-500 mb-[16px] text-[#fff]'>Санал хүсэлт илгээх</h2>
              <p className='text-[16px] font-400 text-[#fff] w-[606px]'>Та манай бүтээгдэхүүн үйлчилгээтэй холбоотой санал хүсэлтээ дараах формоор илгээнэ үү. Манай мэдээллийн ажилтан таны бөглөсөн мэдээллийн дагуу 24 цагийн дотор эргүүлэн холбоо барих болно.</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1344" height="430" viewBox="0 0 1344 430" fill="none">
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