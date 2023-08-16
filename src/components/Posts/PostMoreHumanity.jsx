import React from "react";

function PostsMoreHumanity({ posts }) {
  return (
    <div className="w-full">
      {posts.map((post) => (
        <div key={post.id}>
          <div className="bg-white rounded border flex flex-col w-full">
              <div className="border-b">
              <div className="py-[16px] px-[24px]">
              <div className="text-[16px] flex justify-between font-[500] text-[#23356B] mb-[24px]">
                <div>
                    {post.title}
                </div>
                <div className="p-[8px] border">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.00048 7.21883L4.70048 10.5188L3.75781 9.57616L8.00048 5.3335L12.2431 9.57616L11.2998 10.5188L7.99981 7.21883H8.00048Z" fill="#23356B"/>
                    </svg>
                </div>
              </div>
              <div className="flex gap-[24px] pb-[18px]">
                <div className="flex items-center gap-[8px]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00014 14.1257L8.4809 13.584C9.02643 12.9593 9.51709 12.3665 9.95366 11.8027L10.314 11.3273C11.8188 9.29983 12.5716 7.69069 12.5716 6.50136C12.5716 3.96269 10.5251 1.90479 8.00014 1.90479C5.47519 1.90479 3.42871 3.96269 3.42871 6.50136C3.42871 7.69069 4.18147 9.29983 5.68623 11.3273L6.04662 11.8027C6.66943 12.6007 7.32103 13.3751 8.00014 14.1257Z" stroke="#8F9099" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.00047 8.38081C9.05244 8.38081 9.90523 7.52802 9.90523 6.47605C9.90523 5.42408 9.05244 4.57129 8.00047 4.57129C6.94849 4.57129 6.0957 5.42408 6.0957 6.47605C6.0957 7.52802 6.94849 8.38081 8.00047 8.38081Z" stroke="#8F9099" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="text-[12px] text-[#8F9099] font-400">
                        {post.location}
                    </div>
                </div>
                <div className="flex items-center gap-[8px]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.75 2.875H11.125V1.875C11.125 1.80625 11.0688 1.75 11 1.75H10.125C10.0562 1.75 10 1.80625 10 1.875V2.875H6V1.875C6 1.80625 5.94375 1.75 5.875 1.75H5C4.93125 1.75 4.875 1.80625 4.875 1.875V2.875H2.25C1.97344 2.875 1.75 3.09844 1.75 3.375V13.75C1.75 14.0266 1.97344 14.25 2.25 14.25H13.75C14.0266 14.25 14.25 14.0266 14.25 13.75V3.375C14.25 3.09844 14.0266 2.875 13.75 2.875ZM13.125 13.125H2.875V7.1875H13.125V13.125ZM2.875 6.125V4H4.875V4.75C4.875 4.81875 4.93125 4.875 5 4.875H5.875C5.94375 4.875 6 4.81875 6 4.75V4H10V4.75C10 4.81875 10.0562 4.875 10.125 4.875H11C11.0688 4.875 11.125 4.81875 11.125 4.75V4H13.125V6.125H2.875Z" fill="#8F9099"/>
                        </svg>
                    </div>
                    <div className="text-[12px] text-[#8F9099] font-400">
                    {post.date}
                    </div>
                </div>
              </div>
              </div>
              </div>
              <div className="py-[16px] px-[24px] text-[#454655] text-[16px]">
                <div className="font-[500] mb-[8px]">Гүйцэтгэх үндсэн үүрэг</div>
                <div className="font-400 mb-[24px]">
                    {post.basicissues}
                </div>
                <div className="mb-[8px] font-[500]">Ажлын байранд тавигдах шаардлага</div>
                <div className="mb-[24px]">
                <ul>
                  {post.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                </div>
                <div className="mb-[8px] font-[500]">Нэмэлт мэдээлэл</div>
              <div className="mb-[24px]">
                {post.addinformation}
              </div>
                <div className="mb-[8px] font-[500]">Бусад</div>
              <div className="flex gap-[24px]">
              <div>
                <div>Байршил:</div>
                <div>Салбар:</div>
                <div>Түвшин:</div>
                <div>Төрөл:</div>
              </div>
              <div>
                <div className="">
                    {post.joblocation}
                </div>
                <div className="">
                    {post.industry}
                </div>
                <div className="">
                    {post.level}
                </div>
                <div className="">
                    {post.jobtype}
                </div>
              </div>
              </div>
              <div className="mt-[40px] flex justify-center">
                <div className="py-[12px] text-[16px] font-[400] text-[#fff] px-[7px] bg-[#D0A616] border w-[150px] flex justify-center rounded-xl">
                АНКЕТ ИЛГЭЭХ
                </div>
              </div>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}

export default PostsMoreHumanity;