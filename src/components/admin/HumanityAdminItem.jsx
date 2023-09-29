import React, { useState } from "react";

function HumanityAdminItem({ post }) {
  console.log('InPost:', post);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`rounded-lg p-10 w-[250px] h-max hover:shadow-xl border border-[#8F9099] relative`}>
        <div onClick={handleModalOpen} className="cursor-pointer">
        <div className="text-center mb-4">
          <img
            src={post.image}
            alt=""
            className="w-32 h-32 rounded-full mx-auto mb-2 border-[2px] border-[#8F9099]"
          />
          <h2 className="text-xl font-semibold text-[#262626]">
            {post.surName} {post.nickName}
          </h2>
          <p className="text-sm text-[#262626]">{post.positionOfInterest}</p>
        </div>
        
        </div>
        {isModalOpen && (
        <HumanityAdminModal post={post} onClose={handleModalClose} />
      )}
    </div>
  );
}

export default HumanityAdminItem;




function HumanityAdminModal({ post, onClose }) {
  return (
    <div className="fixed top-0 h-full left-0 w-full backdrop-brightness-50 flex items-center justify-center z-50">
       
          <div className="bg-[] text-[#000] mx-80 mt-10 h-[800px] overflow-auto rounded-lg p-6 w-full">
          <div className="m-2 bg-[#fff] border p-10 ">
          <main className="relative">
          <button
            onClick={onClose}
            className="bg-blue-700 hover:bg-blue-800 text-white absolute top-0 right-0 p-2 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
          >
             <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 460.775 460.775" xmlSpace="preserve">
              <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
              </svg>
         </button>
            <div className="main_info">
              <div className="mt-[24px]">
                <div className="flex gap-[24px]">
                  <div className="mb-6">
                    <img className="h-[150px] rounded-full" src={post.image} alt="" />
                  </div>
                  <div className="mb-6">
                    <p>Сонирхож буй албан тушаал*</p>
                    <p className="mb-4 w-[282px] h-max">{post.positionOfInterest}</p>
                  </div>
                </div>
              </div>
              <div className="mt-[24px] text-[14px]">
                <div className="xl:flex gap-[24px]">
                  <div className="mb-6">
                    <p>Ургийн овог*</p>
                    <p className="mb-4 rounded-[8px] border w-full xl:w-[282px] p-2 h-[40px]">{post.familyName}</p>
                  </div>
                  <div className="mb-6">
                    <p>Овог*</p>
                    <p className="mb-4 rounded-[8px] border w-full xl:w-[282px] p-2 h-[40px]">{post.surName}</p>
                  </div>
                  <div className="mb-6">
                    <p>Нэр*</p>
                    <p className="mb-4 rounded-[8px] border w-full xl:w-[282px] p-2 h-[40px]">{post.nickName}</p>
                  </div>
                </div>
                <div className="xl:flex gap-[24px]">
                  <div className="mb-6">
                    <p>Үндэс угсаа*</p>
                    <p className="mb-4 rounded-[8px] border w-full xl:w-[282px] p-2 h-[40px]">{post.nationality}</p>
                  </div>
                  <div className="mb-6">
                    <p>Регистрийн дугаар*</p>
                    <div className="flex"><p className="mb-4 rounded-l-[8px] border w-[40px] h-[40px] p-2">{post.alphabet1}</p>
                    <p className="mb-4 border w-[40px] h-[40px] p-2">{post.alphabet2}</p>
                    <p className="mb-4 rounded-r-[8px] border w-full p-2 xl:w-[282px] h-[40px]">{post.registration}</p></div>
                  </div>
                  <div className="mb-6">
                    <p>Хүйс*</p>
                    <p className="mb-4 rounded-[8px] border w-full xl:w-[182px] p-2 h-[40px]">{post.gender}</p>
                  </div>
                </div>
                <div className="xl:flex gap-[24px] text-[14px] font-[400]">
                  <div className="mb-6">
                    <p>Facebook*</p>
                    <p className="mb-4 rounded-[8px] border w-full xl:w-[282px] p-2 h-[40px]">{post.facebook}</p>
                  </div>
                  <div className="mb-6">
                    <p>Гар утас*</p>
                    <p className="mb-4 rounded-[8px] border w-full xl:w-[282px] p-2 h-[40px]">{post.phone}</p>
                  </div>
                  <div className="mb-6">
                    <p>И-мэйл*</p>
                    <p className="mb-4 rounded-[8px] border w-full xl:w-[282px] p-2 h-[40px]">{post.mail}</p>
                  </div>
                </div>
              </div>
              <h1 className="mb-[16px] text-[#23356B] text-[14px] font-[500]">Оршин суугаа хаягийн мэдээлэл</h1>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[24px] text-[14px]">
                <div className="">
                  <p>Аймаг хот*</p>
                  <p className="rounded-[8px] border w-full xl:w-[282px] h-[40px] p-2">{post.city}</p>
                </div>
                <div className="">
                  <p>Сум, дүүрэг*</p>
                  <p className="rounded-[8px] border w-full xl:w-[282px] h-[40px] p-2">{post.province}</p>
                </div>
                <div className="">
                  <p>Баг, хороо*</p>
                  <p className="rounded-[8px] border w-full xl:w-[282px] h-[40px] p-2">{post.committee}</p>
                </div>
                <div className="mb-6">
                  <p>Гудамж/Байр,тоот*</p>
                  <p className="rounded-[8px] border w-full xl:w-[282px] h-[40px] p-2">{post.house}</p>
                </div>
              </div>
              <div className="family_info">
                            <div className="mt-[24px] text-[14px]">
                              <div className="xl:flex gap-[24px]">
                                <div className="mb-6">
                                  <p className="block mb-[8px]">Гэрлэлтийн байдал*</p>
                                  <p className="mb-4 border rounded p-2">{post.marital}</p>
                                </div>
                                <div className="mb-6">
                                  <p className="block mb-[8px]">Ам бүлийн тоо*</p>
                                  <p className="mb-4 border rounded p-2">{post.familyStatus}</p>
                                </div>
                                <div className="mb-6">
                                  <p className="block mb-[8px]">Хүүхдийн тоо*</p>
                                  <p className="mb-4 border rounded p-2">{post.childStatus}</p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-[24px] text-[14px]">
                              <div className="flex gap-2">
                                <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">1. Гэр бүлийн байдал</h1>
                                <div className="text-[#919AB5]">/Одоо хамт амьдардаг хүмүүс/</div>
                              </div>
                              <div className="xl:flex gap-[8px]">
                                <div className="">
                                  <p className="block mb-[8px]">Таны хэн болох*</p>
                                  <p className="mb-[24px] rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.whoIs}</p>
                                </div>
                                <div className="">
                                  <p className="block mb-[8px]">Овог*</p>
                                  <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.whoSurname}</p>
                                </div>
                                <div className="">
                                  <p className="block mb-[8px]">Нэр*</p>
                                  <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.whoIsName}</p>
                                </div>
                                <div className="">
                                  <p className="block mb-[8px]">Төрсөн огноо*</p>
                                  <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.whoDate}</p>
                                </div>
                                <div className="">
                                  <p className="block mb-[8px]">Төрсөн газар*</p>
                                  <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.whoIsNameBirth}</p>
                                </div>
                                <div className="">
                                  <p className="block mb-[8px]">Утасны дугаар*</p>
                                  <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.whoIsPhone}</p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-[24px] text-[14px]">
                          <div className="flex gap-2">
                            <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">2. ураг төрлийн байдал</h1>
                            <div className="text-[#919AB5]">/Тусдаа амьдардаг эцэг эх, ах дүү, хүүхэд г.м/</div>
                          </div>
                          <div className="xl:flex gap-[8px]">
                            <div className="">
                              <p className="block mb-[8px]">Таны хэн болох*</p>
                              <p className="mb-[24px] rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.familyWho}</p>
                            </div>
                            <div className="">
                              <p className="block mb-[8px]">Овог*</p>
                              <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.familyWhoSurName}</p>
                            </div>
                            <div className="">
                              <p className="block mb-[8px]">Нэр*</p>
                              <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.familyWhoName}</p>
                            </div>
                            <div className="">
                              <p className="block mb-[8px]">Төрсөн огноо*</p>
                              <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.familyWhoBirth}</p>
                            </div>
                            <div className="">
                              <p className="block mb-[8px]">Төрсөн газар*</p>
                              <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.familyWhoBirthCity}</p>
                            </div>
                            <div className="">
                              <p className="block mb-[8px]">Утасны дугаар*</p>
                              <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.familyWhoPhone}</p>
                            </div>
                          </div>
                        </div>
                        
                          </div>
                          <div className="edu">
                  <div className="mt-[24px] text-[14px]">
                    <div className="flex gap-2">
                      <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">ЕРӨНХИЙ БОЛОВСРОЛ</h1>
                    </div>
                    <div className="xl:flex gap-[8px]">
                      <div className="">
                        <p className="block mb-[8px]">Элссэн он*</p>
                        <p className="mb-[24px] rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.generalEduStart}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Төгссөн он*</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.generalEduEnd}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Улс*</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.generalEduNati}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Аймаг, хот</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.generalEduProvidor}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Сургууль*</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.generalEduName}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Голч\дүн</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.generalEduGPA}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[24px] text-[14px]">
                    <div className="flex gap-2">
                      <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">ИХ ДЭЭД СУРГУУЛЬ</h1>
                    </div>
                    <div className="xl:flex gap-[8px]">
                      <div className="">
                        <p className="block mb-[8px]">Элссэн он*</p>
                        <p className="mb-[24px] rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.univerStart}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Төгссөн он*</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.univerEnd}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Улс*</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.univerNati}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Аймаг, хот</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.univerProvider}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Сургууль*</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.univerName}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Голч\дүн</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.univerGPA}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[24px] text-[14px]">
                    <div className="flex gap-2">
                      <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">ЭРДМИЙН ЦОЛ ЗЭРЭГ</h1>
                      <div className="text-[#919AB5]">/магистр, доктор зэргийг хамруулан бичнэ/</div>
                    </div>
                    <div className="xl:flex gap-[8px] w-full">
                      <div className="">
                        <p className="block mb-[8px]">Огноо</p>
                        <p className="mb-[24px] rounded-[8px] border w-full xl:w-[172px] h-[40px] p-2">{post.acamedicDegreeWhere}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Хамгаалсан газар</p>
                        <p className="rounded-[8px] border w-full xl:w-[172px] h-[40px] p-2">{post.academicWhere}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Эрдмийн зэрэг цол</p>
                        <p className="rounded-[8px] border w-full xl:w-[172px] h-[40px] p-2">{post.academicAward}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Хамгаалсан сэдэв</p>
                        <p className="rounded-[8px] border w-full xl:w-[172px] h-[40px] p-2">{post.academicTitle}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Гэрчилгээ, диплом №</p>
                        <p className="rounded-[8px] border w-full xl:w-[172px] h-[40px] p-2">{post.certificates}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[24px] text-[14px]">
                    <div className="flex gap-2">
                      <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">мэргэжлээрээ болон бусад чиглэлээр хамрагдаж байсан сургалт</h1>
                      <div className="text-[#919AB5]">/3-аас дээш сараар хамрагдсан сургалт/</div>
                    </div>
                    <div className="xl:flex gap-[8px]">
                      <div className="">
                        <p className="block mb-[8px]">Огноо</p>
                        <p className="mb-[24px] rounded-[8px] border w-full xl:w-[217px] h-[40px] p-2">{post.trainingDate}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Хаана ямар байгууллагад</p>
                        <p className="rounded-[8px] border w-full xl:w-[217px] h-[40px] p-2">{post.trainingWhere}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Ямар чиглэл</p>
                        <p className="rounded-[8px] border w-full xl:w-[217px] h-[40px] p-2">{post.trainingRotate}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Үргэлжилсэн хугацаа</p>
                        <p className="rounded-[8px] border w-full xl:w-[217px] h-[40px] p-2">{post.trainingTime}</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="job_info">
                  <div className="mt-[24px] text-[14px]">
                    <div>
                      <h1 className="uppercase text-[#23356B] font-[500]">Хөдөлмөрийн дэвтэр болон НДД-ээр баталгаажсан хөдөлмөрийн үйл ажиллагаа</h1>
                    </div>
                    <div className="text-[#919AB5] mb-[10px]">/Сүүлд ажиллаж байсан ажлын байраасаа эхлүүлж бичнэ үү/</div>
                    <div className="xl:flex gap-[8px]">
                      <div className="">
                        <p className="block mb-[8px]">Орсон он</p>
                        <p className="mb-[24px] rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.lastJobStart}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Гарсан он</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.lastJobEnd}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Байгууллагын нэр</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.lastJobName}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Албан тушаал</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.lastJobPosition}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Гарсан шалтгаан</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-2">{post.lastJobReason}</p>
                      </div>
                      <div className="">
                        <p className="block mb-[8px]">Гол чиг үүрэг</p>
                        <p className="rounded-[8px] border w-full xl:w-[142px] h-[40px] p-1">{post.lastJobFunctions}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-[40px] text-[14px]">
                      <p className="block mb-[8px]">Үндсэн мэргэжлээсээ гадна ямар чиглэлийн ажил хийх сонирхол, хүсэлтэй вэ?</p>
                      <p className="rounded-[8px] border w-full h-[40px] p-2">{post.kindOfWork}</p>
                    </div>
                    <div className="xl:flex gap-[24px] mt-[24px] text-[14px]">
                      <div>
                        <p className="block mb-[8px]">Хүсч буй цалин</p>
                        <p className="rounded-[8px] border w-full xl:w-[282px] h-[40px] p-2">{post.salary}</p>
                      </div>
                      <div>
                        <p className="block mb-[8px]">Бусад хүлээлт \хангамж, сургалт гэх мэт\</p>
                        <p className="rounded-[8px] border w-full xl:w-[282px] h-[40px] p-2">{post.other}</p>
                      </div>
                      <div>
                        <p className="block mb-[8px]">Ажилд орох боломжтой огноо</p>
                        <p className="rounded-[8px] border w-full xl:w-[282px] h-[40px] p-2">{post.jobStartDate}</p>
                      </div>
                    </div>
                    <div className="mt-[24px]">
                      <div className="mb-[18px]">Тогтвор суурьшилтай ажиллах жил:</div>
                      <div className="flex gap-[10px] mb-[10px]">
                        <p type="checkbox" name="hasWorkExperience1" checked={post.hasWorkExperience1} className="rounded-[8px] w-[20px] h-[24px]" />
                        <p className="block mb-[8px]">1 хүртэл жил</p>
                      </div>
                      <div className="flex gap-[10px] mb-[10px]">
                        <p type="checkbox" name="hasWorkExperience2" checked={post.hasWorkExperience2} className="rounded-[8px] w-[20px] h-[24px]" />
                        <p className="block mb-[8px]">1-3 хүртэл жил</p>
                      </div>
                      <div className="flex mb-[30px] gap-[10px]">
                        <p type="checkbox" name="hasWorkExperience3" checked={post.hasWorkExperience3} className="rounded-[8px] w-[20px] h-[24px]" />
                        <p className="block mb-[8px]">3-аас дээш жил</p>
                      </div>
                    </div>
                    <div>
                      <div className="mb-[16px]">Таны найз, танил, эсвэл хамаатан садан “Засагт Хаан” ХХК-д ажилладаг уу?</div>
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[10px]">
                          <p type="checkbox" name="hasOtherExperience1" checked={post.hasOtherExperience1} className="rounded-[8px] w-[20px] h-[24px]" />
                          <p className="block mb-[8px]">Тийм</p>
                        </div>
                        <div className="flex gap-[10px] mb-[16px]">
                          <p type="checkbox" name="hasOtherExperience2" checked={post.hasOtherExperience2} className="rounded-[8px] w-[20px] h-[24px]" />
                          <p className="block mb-[8px]">Үгүй</p>
                        </div>
                      </div>
                      <div className="xl:flex gap-[13px]">
                        <div>
                          <p className="block mb-[8px]">Хэн</p>
                          <p className="rounded-[8px] w-full xl:w-[230px] h-[40px] border p-2" >{post.relativesWho}</p>
                        </div>
                        <div>
                          <p className="block mb-[8px]">Аль нэгжид</p>
                          <p className="rounded-[8px] w-full xl:w-[230px] h-[40px] border p-2">{post.relativesWhere}</p>
                        </div>
                        <div>
                          <p className="block mb-[8px]">Таны юу болох</p>
                          <p className="rounded-[8px] w-full xl:w-[230px] h-[40px] border p-2">{post.relativesYour}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
    <div className="mt-[24px] text-[14px]">
      <div className="flex gap-2">
        <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">1. гадаад хэлний мэдлэг</h1>
      </div>
      <div className="xl:flex gap-[8px]">
        <div className="">
          <p className="block mb-[8px]">Гадаад хэлний нэр</p>
          <p className="mb-[24px] rounded-[8px] border w-full xl:w-[217px] h-[40px] p-2" >{post.foreignLangName}</p>
        </div>
        <div className="mb-6">
          <p className="block mb-[8px]">Шат</p>
          <p
            className="rounded-[8px] border w-full xl:w-[217px] h-[40px] p-2"
          >
            {post.foreignLangStep}
          </p>
        </div>
        <div className="">
          <p className="block mb-[8px]">Суралцсан хугацаа</p>
          <p type="text" name="foreignLangDate" className="rounded-[8px] border w-full xl:w-[217px] h-[40px] p-2" >{post.foreignLangDate}</p>
        </div>
        <div className="">
          <p className="block mb-[8px]">Тайлбар</p>
          <p className="rounded-[8px] border w-full xl:w-[217px] h-[40px] p-2" >{post.foreignLangTitle}</p>
        </div>
      </div>
      <div className="flex mt-[24px]">
        <div className="">
          <h1 className="text-[#23356B] font-[500]">Та ямар нэг хэлний түвшин тогтоох шалгалт өгсөн эсэх:</h1>
        </div>
        <div className="text-[#919AB5] mb-[10px]">(TOEFL, IELTS, HSK гм)</div>
      </div>
      <div className="flex gap-[40px]">
        <div className="flex gap-[10px] mb-[10px]">
          <p type="checkbox" name="hasLanguageLevel1" checked={post.hasLanguageLevel1} className="rounded-[8px] w-[20px] h-[24px]" />
          <p className="block mb-[8px]">Тийм</p>
        </div>
        <div className="flex gap-[10px] mb-[10px]">
          <p className="rounded-[8px] w-[20px] h-[24px] p-2" >{post.hasLanguageLevel2}</p>
          <p className="block mb-[8px]">Үгүй</p>
        </div>
      </div>
      <div className="xl:flex gap-[13px] mb-[40px]">
        <div>
          <p className="block mb-[8px]">Нэр</p>
          <p className="rounded-[8px] w-full xl:w-[230px] h-[40px] border p-2" >{post.hskName}</p>
        </div>
        <div>
          <p className="block mb-[8px]">Огноо</p>
          <p className="rounded-[8px] w-full xl:w-[230px] h-[40px] border p-2" >{post.hskDate}</p>
        </div>
        <div>
          <p className="block mb-[8px]">Дүн</p>
          <p className="rounded-[8px] w-full xl:w-[230px] h-[40px] border p-2">{post.hskGPA}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">2. компьютерийн мэдлэг, чадвар </h1>
      </div>
      <div className="xl:flex gap-[8px]">
        <div className="">
          <p className="block mb-[8px]">Програмын нэр</p>
          <p className="mb-[24px] rounded-[8px] border w-full xl:w-[217px] h-[40px] p-2" >{post.progName}</p>
        </div>
        <div className="mb-6">
          <p className="block mb-[8px]">Шат</p>
          <p
            className="rounded-[8px] border w-full xl:w-[217px] h-[40px] p-2"
          >
            {post.progStep}
          </p>
        </div>
        <div className="">
          <p className="block mb-[8px]">Хэрэглэж буй хугацаа</p>
          <p  className="rounded-[8px] border w-full xl:w-[217px] h-[40px] p-2">{post.progDate}</p>
        </div>
        <div className="">
          <p className="block mb-[8px]">Тайлбар</p>
          <p className="rounded-[8px] border w-full xl:w-[217px] h-[40px] p-2">{post.progTitle}</p>
        </div>
      </div>
    </div>
                      <div className="flex justify-between">
                      <div className="indi">
    <div className="xl:flex gap-[13px] mb-[40px]">
      <div>
        <p className="block mb-[8px]">Таны давуу тал</p>
        <p className="rounded-[8px] w-full xl:w-[388px] h-[40px] border p-2">{post.advantage}</p>
      </div>
      <div>
        <p className="block mb-[8px]">Таны сул тал</p>
        <p className="rounded-[8px] w-full xl:w-[388px] h-[40px] border p-2" >{post.weakness}</p>
      </div>
    </div>
    <div className="flex gap-[13px] mb-[40px]">
      <div className="w-full">
        <p className="block mb-[8px]">Таны ирээдүйн зорилго:</p>
        <p className="rounded-[8px] w-full h-[40px] border p-2" >{post.futureGoals}</p>
      </div>
    </div>
    <div className="flex gap-[13px] mb-[40px]">
      <div className="w-full">
        <p className="block mb-[8px]">Өөрийнхөө талаарх нэмж танилцуулах боломж:</p>
        <p className="rounded-[8px] w-full h-max border p-2" >{post.yourself}</p>
      </div>
    </div>
  </div>
                </div>
                </div>
                </div>
            </div>

            </main>
          </div>

          </div>

    </div>
  )
}