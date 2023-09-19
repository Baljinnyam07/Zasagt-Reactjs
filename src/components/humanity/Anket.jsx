import { useState } from "react";
import { ref, uploadBytesResumable } from 'firebase/storage';
import { app, storage } from '../../firebase';
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

const initialFormData = {
            positionOfInterest:'',
            familyName:'',
            surName:'',
            nickName:'',
            nationality:'',
            alphabet1:'',
            alphabet2:'',
            registration:'',
            gender:'',
            facebook:'',
            phone:'',
            mail:'',
            city:'',
            province:'',
            committee:'',
            house:'',
            marital:'',
            familyStatus: '',
            childStatus:'',
            whoIs: '',
            whoSurname:'',
            whoIsName:'',
            whoDate:'',
            whoIsNameBirth:'',
            whoIsPhone:'',
            familyWho:'',
            familyWhoSurName:'',
            familyWhoName:'',
            familyWhoBirth:'',
            familyWhoBirthCity:'',
            familyWhoPhone:'',
            generalEduStart:'',
            generalEduEnd:'',
            generalEduNati:'',
            generalEduProvidor:'',
            generalEduName:'',
            generalEduGPA:'',
            univerStart:'',
            univerEnd:'',
            univerNati:'',
            univerProvider:'',
            univerName:'',
            univerGPA:'',
            acamedicDegreeWhere:'',
            academicWhere:'',
            academicAward:'',
            academicTitle:'',
            certificates:'',
            trainingDate:'',
            trainingWhere:'',
            trainingRotate:'',
            trainingTime:'',
            lastJobStart:'',
            lastJobEnd:'',
            lastJobName:'',
            lastJobPosition:'',
            lastJobReason:'',
            lastJobFunctions:'',
            kindOfWork:'',
            salary:'',
            other:'',
            jobStartDate:'',
            relativesWho:'',
            relativesWhere:'',
            relativesYour:'',
            foreignLangName:'',
            foreignLangStep:'',
            foreignLangDate:'',
            foreignLangTitle:'',
            hskName:'',
            hskDate:'',
            hskGPA:'',
            progName:'',
            progStep:'',
            progDate:'',
            progTitle:'',
            carType:'',
            carDate:'',
            talentType:'',
            talentDate:'',
            talentLevel:'',
            talentChamp:'',
            rewardType:'',
            rewardName:'',
            rewardChamp:'',
            rewardChampCom:'',
            disciplineTitle:'',
            advantage:'',
            weakness:'',
            futureGoals:'',
            yourself:'',
            hasLanguageLevel1: false,
            hasLanguageLevel2: false,
            hasWorkExperience1: false,
            hasWorkExperience2: false,
            hasWorkExperience3: false,
            hasSkill1: false,
            hasSkill2: false,
            hasOtherExperience1: false,
            hasOtherExperience2: false,
}

const Anket = () =>{
    const [formData, setFormData] = useState(initialFormData);
    const [image, setImage] = useState("");
    const [date] = useState((new Date()).toJSON().slice(0, 10));
    const [step, setStep] = useState(1);
    const [percent, setPercent] = useState(0);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const handleNext = () => {
      setStep(step + 1);
      window.scrollTo({ top: 500, behavior: 'smooth' });
    };
  
    const handlePrev = () => {
      setStep(step - 1);
      window.scrollTo({ top: 500, behavior: 'smooth' });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSubmitButtonClicked(true);
        try {
            const db = getFirestore(app);
            const collectionRef = collection(db, 'humanity');
            const formDataWithoutEmptyStrings = Object.fromEntries(
                Object.entries(formData).filter(([_, value]) => value !== "")
            );
            await addDoc(collectionRef, {
                ...formDataWithoutEmptyStrings,
                createdAt: serverTimestamp(),
                date: date,
                type:"hired",
                image: image,
            });
            setFormData(initialFormData);
            setImage('');

        } catch (error) {
            console.error('Error adding document: ', error);
        }
      };
      
      const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: newValue,
        }));
      };
      const handleFormSubmitAndCloseModal = async (e) => {
        e.preventDefault();
        await handleFormSubmit(e); // Submit the form and show the success modal
    };

    const upload = (e) => {
    let file = e.target.files[0];
    if (file) {
      let name = `${Date.now()}.${file.type.split('/')[1]}`;
      const storageRef = ref(storage, name)
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.then(() => {
        setImage(`https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/${name}?alt=media`)
      });

      uploadTask.on('state_changed', (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(progress);
      });
    }
  }
  
    return(
        <>

<form onSubmit={handleFormSubmitAndCloseModal}>
            <div className="px-[24px] xl:px-0">
            <header className="">
            <div>
              <div className="text-black text-[32px] font-500 font-sans mb-5">Ажилд орохыг хүсэгчийн анкет</div>
            </div>
            <div>
            <div className= {`w-full xl:w-[894px] bg-[#E9EBF0] rounded-[8px] mb-[40px]`}>
              <div className="p-[16px] text-[14px] font-[400] text-[#23356B]">
              <h1 className="mb-[8px]">САНАМЖ</h1>
                    <ol className="">
                      <li>1. Анкетыг үг товчлохгүй, тодорхой бичнэ үү.</li>
                      <li>2. Анкетанд боловсролын бичиг баримтыг хавсаргана.</li>
                      <li>3. Манай компани таны анкетыг хүлээж авснаар ямар нэгэн хариуцлага хүлээхгүй болно.</li>
                    </ol>
              </div>
            </div>
            <div className="border bg-[#E9EBF0] mb-[40px] h-max w-[894px]">
              <ul className="flex text-[6px] xl:text-[12px] font-[400] text-[#23356B]">
                <li className={`py-[8px] xl:py-[15px] px-[10px] xl:px-[19px] ${step <= 1 ? (step === 1 ? "border-[1px] border-[#23356B]" : "") : "bg-[#23356B] text-white"}`}>ҮНДСЭЛ МЭДЭЭЛЭЛ</li>
                <li className={`py-[8px] xl:py-[15px] px-[10px] xl:px-[19px] ${step <= 2 ? (step === 2 ? "border-[1px] border-[#23356B]" : "") : "bg-[#23356B] text-white"}`}>ГЭР БҮЛИЙН БАЙДАЛ</li>
                <li className={`py-[8px] xl:py-[15px] px-[10px] xl:px-[19px] ${step <= 3 ? (step === 3 ? "border-[1px] border-[#23356B]" : "") : "bg-[#23356B] text-white"}`}>БОЛОВСРОЛ</li>
                <li className={`py-[8px] xl:py-[15px] px-[10px] xl:px-[18px] ${step <= 4 ? (step === 4 ? "border-[1px] border-[#23356B]" : "") : "bg-[#23356B] text-white"}`}>АЖИЛЛАСАН БАЙДАЛ</li>
                <li className={`py-[8px] xl:py-[15px] px-[10px] xl:px-[18px] ${step <= 5 ? (step === 5 ? "border-[1px] border-[#23356B]" : "") : "bg-[#23356B] text-white"}`}>УР ЧАДВАР</li>
                <li className={`py-[8px] xl:py-[15px] px-[10px] xl:px-[18px] ${step <= 6 ? (step === 6 ? "border-[1px] border-[#23356B]" : "") : "bg-[#23356B] text-white"}`}>ХУВЬ ХҮНИЙ ОНЦЛОГ</li>
              </ul>
            </div>
            </div>
            </header>
            <main>
              {step === 1 && (
                <div className="main_info">
                {image !== '' ? (
                    <>
                      {percent > 0 && percent < 100 && (
                        <div className='w-full h-4 bg-gray-200 rounded'>
                          <div
                            className={`w-${percent} bg-green-400 h-full rounded`}
                          ></div>
                        </div>
                      )}
                      {image && (
                        <img className='w-[150px] border mt-4 mb-[24px] rounded' src={image} alt='post_image' />
                      )}
                    </>
                  ) : (
                    <>
                    <div className="text-[#919AB5] text-[12px] font-[400] border w-max bg-[#E9EBF0] content-center rounded-[8px]">
                      <div className="p-[10px] flex-none justify-center items-center">
                        <div className="w-full flex justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
                            <path d="M36.4998 0C10.9498 0 23.2686 33.3063 23.2686 33.3063C26.0061 37.8688 29.6561 36.9562 29.6561 40.15C29.6561 42.8875 26.4623 43.8 23.2686 44.2562C18.2498 44.2562 13.6873 43.3438 9.1248 51.5563C6.3873 56.575 5.01855 73 5.01855 73H67.5248C67.5248 73 66.1561 56.575 63.8748 51.5563C59.3123 42.8875 54.7498 44.2563 49.7311 43.8C46.5373 43.3438 43.3436 42.4312 43.3436 39.6937C43.3436 36.9562 46.9935 37.8687 49.7311 32.85C49.7311 33.3062 62.0498 0 36.4998 0Z" fill="#919AB5"/>
                          </svg>
                        </div>
                        <div className="w-[98px] text-center pt-[10px]">Сүүлийн 3 сард авхуулсан 3x4 цээж зураг</div>
                      </div>
                    </div>
                    </>
                  )}
                <div className="mt-[24px]">
                  <div className="flex gap-[24px]">
                  <div className="mb-6">
                    <label htmlFor="image" className="block">Зураг* </label>
                    <input type="file" onChange={upload} className="mb-4 rounded-[8px] border w-full xl:w-[282px]" required/>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="image" className="block">Сонирхож буй албан тушаал* </label>
                    <input type="text" name="positionOfInterest" value={formData.positionOfInterest} onChange={handleFormChange} className="mb-4 rounded-[8px] border w-[282px] h-max"/>
                  </div>
                  </div>
                </div>
                <div className="mt-[24px] text-[14px]">
                  <div className="xl:flex gap-[24px]">
                  <div className="mb-6">
                    <label className="block mb-[8px]">Ургийн овог*  </label>
                    <input type="text" name="familyName" value={formData.familyName} onChange={handleFormChange} className="mb-4 rounded-[8px] border w-full xl:w-[282px] h-[40px]" required/>
                  </div>
                  <div className="mb-6">
                    <label className="block mb-[8px]">Овог*</label>
                    <input type="text" name="surName" value={formData.surName} onChange={handleFormChange} className="mb-4 rounded-[8px] border w-full xl:w-[282px] h-[40px]"/>
                  </div>
                  <div className="mb-6">
                    <label className="block mb-[8px]">Нэр* </label>
                    <input type="text" name="nickName" value={formData.nickName} onChange={handleFormChange} className="mb-4 rounded-[8px] border w-full xl:w-[282px] h-[40px]"/>
                  </div>
                  </div>
                  <div className="xl:flex gap-[24px]">
                  <div className="mb-6">
                    <label className="block mb-[8px]">Үндэс угсаа*</label>
                    <input type="text" name="nationality" value={formData.nationality} onChange={handleFormChange} className="mb-4 rounded-[8px] border w-full xl:w-[282px] h-[40px]" />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-[8px]">Регистрийн дугаар*</label>
                    <div>
                    <select className="mb-4 border rounded-l-[8px] w-10 h-[40px]" name="alphabet1" id="alphabet1" value={formData.alphabet1} onChange={handleFormChange}>
                      <option value="А">А</option>
                      <option value="Б">Б</option>
                      <option value="В">В</option>
                      <option value="Г">Г</option>
                      <option value="Д">Д</option>
                      <option value="Е">Е</option>
                      <option value="Ё">Ё</option>
                      <option value="Ж">Ж</option>
                      <option value="З">З</option>
                      <option value="И">И</option>
                      <option value="Й">Й</option>
                      <option value="К">К</option>
                      <option value="Л">Л</option>
                      <option value="М">М</option>
                      <option value="Н">Н</option>
                      <option value="О">О</option>
                      <option value="Ө">Ө</option>
                      <option value="П">П</option>
                      <option value="Р">Р</option>
                      <option value="С">С</option>
                      <option value="Т">Т</option>
                      <option value="У">У</option>
                      <option value="Ү">Ү</option>
                      <option value="Ф">Ф</option>
                      <option value="Х">Х</option>
                      <option value="Ц">Ц</option>
                      <option value="Ч">Ч</option>
                      <option value="Ш">Ш</option>
                      <option value="Щ">Щ</option>
                      <option value="Э">Э</option>
                      <option value="Ю">Ю</option>
                      <option value="Я">Я</option>
                    </select>
                    <select className="mb-4 border w-10 h-[40px]" name="alphabet2" id="alphabet2" value={formData.alphabet2} onChange={handleFormChange} form="alphabet">
                      <option value="А">А</option>
                      <option value="Б">Б</option>
                      <option value="В">В</option>
                      <option value="Г">Г</option>
                      <option value="Д">Д</option>
                      <option value="Е">Е</option>
                      <option value="Ё">Ё</option>
                      <option value="Ж">Ж</option>
                      <option value="З">З</option>
                      <option value="И">И</option>
                      <option value="Й">Й</option>
                      <option value="К">К</option>
                      <option value="Л">Л</option>
                      <option value="М">М</option>
                      <option value="Н">Н</option>
                      <option value="О">О</option>
                      <option value="Ө">Ө</option>
                      <option value="П">П</option>
                      <option value="Р">Р</option>
                      <option value="С">С</option>
                      <option value="Т">Т</option>
                      <option value="У">У</option>
                      <option value="Ү">Ү</option>
                      <option value="Ф">Ф</option>
                      <option value="Х">Х</option>
                      <option value="Ц">Ц</option>
                      <option value="Ч">Ч</option>
                      <option value="Ш">Ш</option>
                      <option value="Щ">Щ</option>
                      <option value="Э">Э</option>
                      <option value="Ю">Ю</option>
                      <option value="Я">Я</option>
                    </select>
                    <input type="number" name="registration" value={formData.registration} onChange={handleFormChange} className="mb-4 rounded-r-[8px] border w-full xl:w-[282px] h-[40px]"/>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block mb-[8px]">Хүйс*</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleFormChange}
                      className="mb-4 rounded-[8px] border w-full xl:w-[282px] h-[40px]"
                    >
                      <option value="">Сонгоно уу</option>
                      <option value="male">Эрэгтэй</option>
                      <option value="female">Эмэгтэй</option>
                      <option value="other">Бусад</option>
                    </select>
                  </div>
                  </div>
                  <div className="xl:flex gap-[24px] text-[14px] font-[400]">
                  <div className="mb-6">
                    <label className="block mb-[8px]">Facebook*</label>
                    <input type="text" name="facebook" value={formData.facebook} onChange={handleFormChange} className="mb-4 rounded-[8px] border w-full xl:w-[282px] h-[40px]" />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-[8px]">Гар утас*</label>
                    <input type="number" name="phone" value={formData.phone} onChange={handleFormChange} className="mb-4 rounded-[8px] border w-full xl:w-[282px] h-[40px]"/>
                  </div>
                  <div className="mb-6">
                    <label className="block mb-[8px]">И-мэйл*</label>
                    <input type="email" name="mail" value={formData.mail} onChange={handleFormChange} className="mb-4 rounded-[8px] border w-full xl:w-[282px] h-[40px]"/>
                  </div>
                  </div>
                </div>
                <h1 className="mb-[16px] text-[#23356B] text-[14px] font-[500]">Оршин суугаа хаягийн мэдээлэл</h1>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[24px] text-[14px]">
                  <div className="">
                    <label className="block mb-[8px]">Аймаг хот*</label>
                    <input type="text" name="city" value={formData.city} onChange={handleFormChange} className=" rounded-[8px] border w-full xl:w-[282px] h-[40px]" />
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Сум, дүүрэг*</label>
                    <input type="text" name="province" value={formData.province} onChange={handleFormChange} className=" rounded-[8px] border w-full xl:w-[282px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Баг, хороо*</label>
                    <input type="text" name="committee" value={formData.committee} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[282px] h-[40px]"/>
                  </div>
                  <div className="mb-6">
                    <label className="block mb-[8px]">Гудамж/Байр,тоот*</label>
                    <input type="text" name="house" value={formData.house} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[282px] h-[40px]" />
                  </div>
                </div>
                <div className="flex float-right">
                <button className="mt-[40px] bg-[#D0A616] text-white rounded-[8px]" onClick={handleNext}>
                  <div className="px-[24px] py-[7px]">ДАРААХ</div>
                </button>
                </div>

                </div>
                
              )}
              {step === 2 && (
                <div className="family_info">
                <div className="mt-[24px] text-[14px]">
                  <div className="xl:flex gap-[24px]">
                  <div className="mb-6">
                  <label className="block mb-[8px]">Гэрлэлтийн байдал*</label>
                  <select
                    name="marital"
                    value={formData.marital}
                    onChange={handleFormChange}
                    className="mb-4 rounded-[8px] border w-full xl:w-[282px] h-[40px]"
                  >
                    <option value="">Сонгоно уу</option>
                    <option value="single">Ганц бие</option>
                    <option value="married">Гэрлэсэн</option>
                  </select>
                </div>
                <div className="mb-6">
                <label className="block mb-[8px]">Ам бүлийн тоо*</label>
                <select
                  name="familyStatus"
                  value={formData.familyStatus}
                  onChange={handleFormChange}
                  className="mb-4 rounded-[8px] border w-full xl:w-[282px] h-[40px]"
                >
                  <option value="">Сонгоно уу</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="4up">4 дээш</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block mb-[8px]">Хүүхдийн тоо*</label>
                <select
                  name="childStatus"
                  value={formData.childStatus}
                  onChange={handleFormChange}
                  className="mb-4 rounded-[8px] border w-full xl:w-[282px] h-[40px]"
                >
                  <option value="">Сонгоно уу</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="4up">4 дээш</option>
                </select>
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
                    <label className="block mb-[8px]">Таны хэн болох*</label>
                    <input type="text" name="whoIs" value={formData.whoIs} onChange={handleFormChange} className="mb-[24px] rounded-[8px] border w-full xl:w-[142px] h-[40px]" />
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Овог*</label>
                    <input type="text" name="whoSurname" value={formData.whoSurname} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Нэр*</label>
                    <input type="text" value={formData.whoIsName} onChange={handleFormChange} name="whoIsName" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Төрсөн огноо*</label>
                    <input type="text" name="whoDate" value={formData.whoDate} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[142px] h-[40px]" />
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Төрсөн газар*</label>
                    <input type="text" value={formData.whoIsNameBirth} onChange={handleFormChange} name="whoIsNameBirth" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Утасны дугаар*</label>
                    <input type="text" value={formData.whoIsPhone} onChange={handleFormChange} name="whoIsPhone" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  </div>
                  <button className="border py-[7px] px-[24px] rounded-[8px] bg-[#23356B] text-white mt-[8px] xl:mt-0">+ Мөр нэмэх</button>
                </div>
                <div className="mt-[24px] text-[14px]">
                  <div className="flex gap-2">
                    <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">2. ураг төрлийн байдал</h1>
                    <div className="text-[#919AB5]">/Тусдаа амьдардаг эцэг эх, ах дүү, хүүхэд г.м/</div>
                  </div>
                  <div className="xl:flex gap-[8px]">
                  <div className="">
                    <label className="block mb-[8px]">Таны хэн болох*</label>
                    <input type="text" value={formData.familyWho} onChange={handleFormChange} name="familyWho" className="mb-[24px] rounded-[8px] border w-full xl:w-[142px] h-[40px]" />
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Овог*</label>
                    <input type="text" value={formData.familyWhoSurName} onChange={handleFormChange} name="familyWhoSurName" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Нэр*</label>
                    <input type="text" value={formData.familyWhoName} onChange={handleFormChange} name="familyWhoName" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Төрсөн огноо*</label>
                    <input type="text" value={formData.familyWhoBirth} onChange={handleFormChange} name="familyWhoBirth" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]" />
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Төрсөн газар*</label>
                    <input type="text" value={formData.familyWhoBirthCity} onChange={handleFormChange} name="familyWhoBirthCity" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Утасны дугаар*</label>
                    <input type="text" value={formData.familyWhoPhone} onChange={handleFormChange} name="familyWhoPhone" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  </div>
                  <button className="border py-[7px] px-[24px] rounded-[8px] bg-[#23356B] text-white mt-[8px] xl:mt-0">+ Мөр нэмэх</button>
                </div>
                <div className="flex justify-between">
                <button className="mt-[40px] bg-[#D0A616] text-white rounded-[8px]" onClick={handlePrev}>
                  <div className="px-[24px] py-[7px]">ӨМНӨХ</div>
                </button>
                <button className="mt-[40px] bg-[#D0A616] text-white rounded-[8px]" onClick={handleNext}>
                  <div className="px-[24px] py-[7px]">ДАРААХ</div>
                </button>
                </div>

                </div>
              )}  
              {step === 3 && (
                <div className="edu">
                <div className="mt-[24px] text-[14px]">
                  <div className="flex gap-2">
                    <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">ЕРӨНХИЙ БОЛОВСРОЛ</h1>
                  </div>
                  <div className="xl:flex gap-[8px]">
                  <div className="">
                    <label className="block mb-[8px]">Элссэн он*</label>
                    <input type="text" value={formData.generalEduStart} onChange={handleFormChange} name="generalEduStart" className="mb-[24px] rounded-[8px] border w-full xl:w-[142px] h-[40px]" />
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Төгссөн он*</label>
                    <input type="text" value={formData.generalEduEnd} onChange={handleFormChange} name="generalEduEnd" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Улс*</label>
                    <input type="text" value={formData.generalEduNati} onChange={handleFormChange} name="generalEduNati" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Аймаг, хот</label>
                    <input type="text" value={formData.generalEduProvidor} onChange={handleFormChange} name="generalEduProvidor" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]" />
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Сургууль* </label>
                    <input type="text" value={formData.generalEduName} onChange={handleFormChange} name="generalEduName" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Голч\дүн</label>
                    <input type="text" value={formData.generalEduGPA} onChange={handleFormChange} name="generalEduGPA" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  </div>
                  <button className="border py-[7px] px-[24px] rounded-[8px] bg-[#23356B] text-white mt-[8px] xl:mt-0">+ Мөр нэмэх</button>
                </div>
                <div className="mt-[24px] text-[14px]">
                  <div className="flex gap-2">
                    <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">ИХ ДЭЭД СУРГУУЛЬ</h1>
                  </div>
                  <div className="xl:flex gap-[8px]">
                  <div className="">
                    <label className="block mb-[8px]">Элссэн он*</label>
                    <input type="text" value={formData.univerStart} onChange={handleFormChange} name="univerStart" className="mb-[24px] rounded-[8px] border w-full xl:w-[142px] h-[40px]" />
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Төгссөн он*</label>
                    <input type="text" value={formData.univerEnd} onChange={handleFormChange} name="univerEnd" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Улс*</label>
                    <input type="text" value={formData.univerNati} onChange={handleFormChange} name="univerNati" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Аймаг, хот</label>
                    <input type="text" value={formData.univerProvider} onChange={handleFormChange} name="univerProvider" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]" />
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Сургууль* </label>
                    <input type="text" value={formData.univerName} onChange={handleFormChange} name="univerName" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Голч\дүн</label>
                    <input type="text" value={formData.univerGPA} onChange={handleFormChange} name="univerGPA" className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                  </div>
                  </div>
                  <button className="border py-[7px] px-[24px] rounded-[8px] bg-[#23356B] text-white mt-[8px] xl:mt-0">+ Мөр нэмэх</button>
                </div>
                <div className="mt-[24px] text-[14px]">
                  <div className="flex gap-2">
                    <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">ЭРДМИЙН ЦОЛ ЗЭРЭГ</h1> 
                    <div className="text-[#919AB5]">/магистр, доктор зэргийг хамруулан бичнэ/</div>
                  </div>
                  <div className="xl:flex gap-[8px] w-full">
                  <div className="">
                    <label className="block mb-[8px]">Огноо</label>
                    <input type="text" value={formData.acamedicDegreeWhere} onChange={handleFormChange} name="acamedicDegreeWhere"  className="mb-[24px] rounded-[8px] border w-full xl:w-[172px] h-[40px]" />
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Хамгаалсан газар</label>
                    <input type="text" name="academicWhere" value={formData.academicWhere} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[172px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Эрдмийн зэрэг цол</label>
                    <input type="text" name="academicAward" value={formData.academicAward} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[172px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Хамгаалсан сэдэв</label>
                    <input type="text" name="academicTitle" value={formData.academicTitle} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[172px] h-[40px]" />
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Гэрчилгээ, диплом №</label>
                    <input type="text" name="certificates" value={formData.certificates} onChange={handleFormChange}  className="rounded-[8px] border w-full xl:w-[172px] h-[40px]"/>
                  </div>
                  </div>
                  <button className="border py-[7px] px-[24px] rounded-[8px] bg-[#23356B] text-white mt-[8px] xl:mt-0">+ Мөр нэмэх</button>
                </div>
                <div className="mt-[24px] text-[14px]">
                  <div className="flex gap-2">
                    <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">мэргэжлээрээ болон бусад чиглэлээр хамрагдаж байсан сургалт</h1>
                    <div className="text-[#919AB5]">/3-аас дээш сараар хамрагдсан сургалт/</div>
                  </div>
                  <div className="xl:flex gap-[8px]">
                  <div className="">
                    <label className="block mb-[8px]">Огноо</label>
                    <input type="text" name="trainingDate" value={formData.trainingDate} onChange={handleFormChange} className="mb-[24px] rounded-[8px] border w-full xl:w-[217px] h-[40px]" />
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Хаана ямар байгууллагад</label>
                    <input type="text" name="trainingWhere" value={formData.trainingWhere} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[217px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Ямар чиглэл</label>
                    <input type="text" name="trainingRotate" value={formData.trainingRotate} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[217px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Үргэлжилсэн хугацаа</label>
                    <input type="text" name="trainingTime" value={formData.trainingTime} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[217px] h-[40px]" />
                  </div>
                  </div>
                  <button className="border py-[7px] px-[24px] rounded-[8px] bg-[#23356B] text-white mt-[8px] xl:mt-0">+ Мөр нэмэх</button>
                </div>
                <div className="flex justify-between">
                <button className="mt-[40px] bg-[#D0A616] text-white rounded-[8px]" onClick={handlePrev}>
                  <div className="px-[24px] py-[7px]">ӨМНӨХ</div>
                </button>
                <button className="mt-[40px] bg-[#D0A616] text-white rounded-[8px]" onClick={handleNext}>
                  <div className="px-[24px] py-[7px]">ДАРААХ</div>
                </button>
                </div>
                </div>
              )}    
              {step === 4 && (
                <div className="job_info">
                <div className="mt-[24px] text-[14px]">
                <div className="">
                    <h1 className="uppercase text-[#23356B] font-[500]">Хөдөлмөрийн дэвтэр болон НДД-ээр баталгаажсан хөдөлмөрийн үйл ажиллагаа</h1>
                </div>
                <div className="text-[#919AB5] mb-[10px]">/Сүүлд ажиллаж байсан ажлын байраасаа эхлүүлж бичнэ үү/</div>
                <div className="xl:flex gap-[8px]">
                <div className="">
                    <label className="block mb-[8px]">Орсон он</label>
                    <input type="text" name="lastJobStart" value={formData.lastJobStart} onChange={handleFormChange} className="mb-[24px] rounded-[8px] border w-full xl:w-[142px] h-[40px]" />
                </div>
                <div className="">
                    <label className="block mb-[8px]">Гарсан он</label>
                    <input type="text" name="lastJobEnd" value={formData.lastJobEnd} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                </div>
                <div className="">
                    <label className="block mb-[8px]">Байгууллагын нэр</label>
                    <input type="text" name="lastJobName" value={formData.lastJobName} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                </div>
                <div className="">
                    <label className="block mb-[8px]">Албан тушаал</label>
                    <input type="text" name="lastJobPosition" value={formData.lastJobPosition} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[142px] h-[40px]" />
                </div>
                <div className="">
                    <label className="block mb-[8px]">Гарсан шалтгаан</label>
                    <input type="text" name="lastJobReason" value={formData.lastJobReason} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                </div>
                <div className="">
                    <label className="block mb-[8px]">Гол чиг үүрэг</label>
                    <input type="text" name="lastJobFunctions" value={formData.lastJobFunctions} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[142px] h-[40px]"/>
                </div>
                </div>
                <button className="border py-[7px] px-[24px] rounded-[8px] bg-[#23356B] text-white mt-[8px] xl:mt-0">+ Мөр нэмэх</button>
                </div>
                <div>
                <div className="mt-[40px] text-[14px]">
                    <label className="block mb-[8px]">Үндсэн мэргэжлээсээ гадна ямар чиглэлийн ажил хийх сонирхол, хүсэлтэй вэ?</label>
                    <input type="text" name="kindOfWork" value={formData.kindOfWork} onChange={handleFormChange} className="rounded-[8px] border w-full h-[40px]"/>
                </div>
                <div className="xl:flex gap-[24px] mt-[24px] text-[14px]">
                    <div>
                    <label className="block mb-[8px]">Хүсч буй цалин</label>
                    <input type="text" name="salary" value={formData.salary} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[282px] h-[40px]"/>
                    </div>
                   <div>
                   <label className="block mb-[8px]">Бусад хүлээлт \хангамж, сургалт гэх мэт\</label>
                    <input type="text" name="other" value={formData.other} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[282px] h-[40px]"/>
                   </div>
                    <div>
                    <label className="block mb-[8px]">Ажилд орох боломжтой огноо</label>
                    <input type="text" name="jobStartDate" value={formData.jobStartDate} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[282px] h-[40px]"/>
                    </div>
                </div>
                <div className="mt-[24px]">
                    <div className="mb-[18px]">Тогтвор суурьшилтай ажиллах жил:</div>
                    <div className="flex gap-[10px] mb-[10px]">
                        <input type="checkbox" name="hasWorkExperience1" checked={formData.hasWorkExperience1} onChange={handleFormChange} className="rounded-[8px] w-[20px] h-[24px]"/>
                        <label className="block mb-[8px]">1 хүртэл жил</label>
                    </div>
                    <div className="flex gap-[10px] mb-[10px]">
                        <input type="checkbox" name="hasWorkExperience2" checked={formData.hasWorkExperience2} onChange={handleFormChange} className="rounded-[8px] w-[20px] h-[24px]"/>
                        <label className="block mb-[8px]">1-3 хүртэл жил</label>
                    </div>
                    <div className="flex mb-[30px] gap-[10px]">
                        <input type="checkbox" name="hasWorkExperience3" checked={formData.hasWorkExperience3} onChange={handleFormChange} className="rounded-[8px] w-[20px] h-[24px]"/>
                        <label className="block mb-[8px]">3-аас дээш жил</label>
                    </div>
                </div>
                <div>
                    <div className="mb-[16px]">Таны найз, танил, эсвэл хамаатан садан “Засагт Хаан” ХХК-д ажилладаг уу?</div>
                        <div className="flex gap-[40px]">
                            <div className="flex gap-[10px]">
                                <input type="checkbox" name="hasOtherExperience1" checked={formData.hasOtherExperience1} onChange={handleFormChange} className="rounded-[8px] w-[20px] h-[24px]"/>
                                <label className="block mb-[8px]">Тийм</label>
                            </div>
                            <div className="flex gap-[10px] mb-[16px]">
                                <input type="checkbox" name="hasOtherExperience2" checked={formData.hasOtherExperience2} onChange={handleFormChange} className="rounded-[8px] w-[20px] h-[24px]"/>
                                <label className="block mb-[8px]">Үгүй</label>
                            </div>
                        </div>
                    <div className="xl:flex gap-[13px]">
                        <div>
                        <label className="block mb-[8px]">Хэн</label>
                        <input type="text" name="relativesWho" value={formData.relativesWho} onChange={handleFormChange} className="rounded-[8px] w-full xl:w-[230px] h-[40px] border"/>
                        </div>
                        <div>
                        <label className="block mb-[8px]">Аль нэгжид</label>
                        <input type="text" name="relativesWhere" value={formData.relativesWhere} onChange={handleFormChange} className="rounded-[8px] w-full xl:w-[230px] h-[40px] border"/>
                        </div>
                        <div>
                        <label className="block mb-[8px]">Таны юу болох</label>
                        <input type="text" name="relativesYour" value={formData.relativesYour} onChange={handleFormChange} className="rounded-[8px] w-full xl:w-[230px] h-[40px] border"/>
                        </div>
                    </div>
                </div>
                </div>
                <div className="flex justify-between">
                <button className="mt-[40px] bg-[#D0A616] text-white rounded-[8px]" onClick={handlePrev}>
                  <div className="px-[24px] py-[7px]">ӨМНӨХ</div>
                </button>
                <button className="mt-[40px] bg-[#D0A616] text-white rounded-[8px]" onClick={handleNext}>
                  <div className="px-[24px] py-[7px]">ДАРААХ</div>
                </button>
                </div>
            </div>
              )}
              {step === 5 && (
                <div className="skill">
                <div className="mt-[24px] text-[14px]">
                  <div className="flex gap-2">
                    <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">1. гадаад хэлний мэдлэг</h1>
                  </div>
                  <div className="xl:flex gap-[8px]">
                  <div className="">
                    <label className="block mb-[8px]">Гадаад хэлний нэр</label>
                    <input type="text" name="foreignLangName" value={formData.foreignLangName} onChange={handleFormChange} className="mb-[24px] rounded-[8px] border w-full xl:w-[217px] h-[40px]" />
                  </div>
                  <div className="mb-6">
                  <label className="block mb-[8px]">Шат</label>
                  <select
                    name="foreignLangStep"
                    value={formData.foreignLangStep}
                    onChange={handleFormChange}
                    className="rounded-[8px] border w-full xl:w-[217px] h-[40px]"
                  >
                    <option value="">Select Proficiency Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                  <div className="">
                    <label className="block mb-[8px]">Суралцсан хугацаа</label>
                    <input type="text" name="foreignLangDate" value={formData.foreignLangDate} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[217px] h-[40px]"/>
                  </div>
                  <div className="">
                    <label className="block mb-[8px]">Тайлбар</label>
                    <input type="text" name="foreignLangTitle" value={formData.foreignLangTitle} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[217px] h-[40px]" />
                  </div>
                  </div>
                  <button className="border py-[7px] px-[24px] rounded-[8px] bg-[#23356B] text-white mt-[8px] xl:mt-0">+ Мөр нэмэх</button>
                  <div className="flex mt-[24px]">
                     <div className="">
                        <h1 className="text-[#23356B] font-[500]">Та ямар нэг хэлний түвшин тогтоох шалгалт өгсөн эсэх:</h1>
                    </div>
                        <div className="text-[#919AB5] mb-[10px]">(TOEFL, IELTS, HSK гм)</div>
                  </div>
                       <div className="flex gap-[40px]">
                       <div className="flex gap-[10px] mb-[10px]">
                            <input type="checkbox" name="hasLanguageLevel1" checked={formData.hasLanguageLevel1} onChange={handleFormChange} className="rounded-[8px] w-[20px] h-[24px]"/>
                            <label className="block mb-[8px]">Тийм</label>
                        </div>
                        <div className="flex gap-[10px] mb-[10px]">
                            <input type="checkbox" name="hasLanguageLevel2" checked={formData.hasLanguageLevel2} onChange={handleFormChange} className="rounded-[8px] w-[20px] h-[24px]"/>
                            <label className="block mb-[8px]">Үгүй</label>
                        </div>
                        
                       </div>
                       <div className="xl:flex gap-[13px] mb-[40px]">
                            <div>
                            <label className="block mb-[8px]">Нэр</label>
                            <input type="text" name="hskName" value={formData.hskName} onChange={handleFormChange}  className="rounded-[8px] w-full xl:w-[230px] h-[40px] border"/>
                            </div>
                            <div>
                            <label className="block mb-[8px]">Огноо</label>
                            <input type="text" name="hskDate" value={formData.hskDate} onChange={handleFormChange} className="rounded-[8px] w-full xl:w-[230px] h-[40px] border"/>
                            </div>
                            <div>
                            <label className="block mb-[8px]">Дүн</label>
                            <input type="text" name="hskGPA" value={formData.hskGPA} onChange={handleFormChange} className="rounded-[8px] w-full xl:w-[230px] h-[40px] border"/>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">2. компьютерийн мэдлэг, чадвар </h1>
                        </div>
                        <div className="xl:flex gap-[8px]">
                        <div className="">
                            <label className="block mb-[8px]">Програмын нэр</label>
                            <input type="text" name="progName" value={formData.progName} onChange={handleFormChange} className="mb-[24px] rounded-[8px] border w-full xl:w-[217px] h-[40px]" />
                        </div>
                        <div className="mb-6">
                        <label className="block mb-[8px]">Шат</label>
                        <select
                          name="progStep"
                          value={formData.progStep}
                          onChange={handleFormChange}
                          className="rounded-[8px] border w-full xl:w-[217px] h-[40px]"
                        >
                          <option value="">Select Proficiency Level</option>
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>
                        <div className="">
                            <label className="block mb-[8px]">Хэрэглэж буй хугацаа</label>
                            <input type="text" name="progDate" value={formData.progDate} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[217px] h-[40px]"/>
                        </div>
                        <div className="">
                            <label className="block mb-[8px]">Тайлбар</label>
                            <input type="text" name="progTitle" value={formData.progTitle} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[217px] h-[40px]" />
                        </div>
                        </div>
                  </div>
                        
                  <div>
                  <div className="mb-[16px]">Жолооны үнэмлэхтэй эсэх:</div>

                      <div className="flex gap-[40px]">
                       <div className="flex gap-[10px] mb-[10px]">
                            <input type="checkbox" name="hasSkill1" checked={formData.hasSkill1} onChange={handleFormChange} className="rounded-[8px] w-[20px] h-[24px]"/>
                            <label className="block mb-[8px]">Тийм</label>
                        </div>
                        <div className="flex gap-[10px] mb-[10px]">
                            <input type="checkbox" name="hasSkill2" checked={formData.hasSkill2} onChange={handleFormChange} className="rounded-[8px] w-[20px] h-[24px]"/>
                            <label className="block mb-[8px]">Үгүй</label>
                        </div>
                       </div>
                       <div className="xl:flex gap-[13px] mb-[40px]">
                            <div>
                            <label className="block mb-[8px]">Ангилал</label>
                            <input type="text" name="carType" value={formData.carType} onChange={handleFormChange} className="rounded-[8px] w-full xl:w-[288px] h-[40px] border"/>
                            </div>
                            <div>
                            <label className="block mb-[8px]">Хэдэн жил машин барьж байгаа эсэх</label>
                            <input type="text" name="carDate" value={formData.carDate} onChange={handleFormChange} className="rounded-[8px] w-full xl:w-[288px] h-[40px] border"/>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <h1 className="mb-[16px] uppercase text-[#23356B] font-[500]">АВЬЯАС ЧАДВАР</h1>
                        </div>
                        <div className="xl:flex gap-[8px]">
                        <div className="">
                            <label className="block mb-[8px]">Төрөл</label>
                            <input type="text" name="talentType" value={formData.talentType} onChange={handleFormChange} className="mb-[24px] rounded-[8px] border w-full xl:w-[217px] h-[40px]" />
                        </div>
                        <div className="">
                            <label className="block mb-[8px]">Хичээллэсэн жил</label>
                            <input type="text" name="talentDate" value={formData.talentDate} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[217px] h-[40px]"/>
                        </div>
                        <div className="">
                            <label className="block mb-[8px]">Зэрэг цол</label>
                            <input type="text" name="talentLevel" value={formData.talentLevel} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[217px] h-[40px]"/>
                        </div>
                        <div className="">
                            <label className="block mb-[8px]">Амжилт</label>
                            <input type="text" name="talentChamp" value={formData.talentChamp} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[217px] h-[40px]" />
                        </div>
                        
                  </div>
                  <div className="xl:flex gap-2">
                            <h1 className="mb-[16px] mt-[24px] xl:mt-0 uppercase text-[#23356B]">ШАГНАЛ</h1>
                        </div>
                        <div className="xl:flex gap-[8px]">
                        <div className="">
                            <label className="block mb-[8px]">Төрөл</label>
                            <input type="text" name="rewardType" value={formData.rewardType} onChange={handleFormChange} className="mb-[24px] rounded-[8px] border w-full xl:w-[217px] h-[40px]" />
                        </div>
                        <div className="">
                            <label className="block mb-[8px]">Шагналын нэр</label>
                            <input type="text" name="rewardName" value={formData.rewardName} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[217px] h-[40px]"/>
                        </div>
                        <div className="">
                            <label className="block mb-[8px]">Шагналын шалтгаан</label>
                            <input type="text" name="rewardChamp" value={formData.rewardChamp} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[217px] h-[40px]"/>
                        </div>
                        <div className="">
                            <label className="block mb-[8px]">Шагнал олгосон байгууллага</label>
                            <input type="text" name="rewardChampCom" value={formData.rewardChampCom} onChange={handleFormChange} className="rounded-[8px] border w-full xl:w-[217px] h-[40px]" />
                        </div>
                  </div>
                  <div className="mb-[16px]">Та урьд өмнө ял шийтгэл эсвэл ямар нэгэн сахилгын арга хэмжээ авагдаж байсан эсэх:</div>
                      <div className="flex gap-[40px]">
                       <div className="flex gap-[10px] mb-[10px]">
                            <input type="checkbox" name="hasWorkExperience" checked={formData.hasWorkExperience} onChange={handleFormChange} className="rounded-[8px] w-[20px] h-[24px]"/>
                            <label className="block mb-[8px]">Тийм</label>
                        </div>
                        <div className="flex gap-[10px] mb-[10px]">
                            <input type="checkbox"  className="rounded-[8px] w-[20px] h-[24px]"/>
                            <label className="block mb-[8px]">Үгүй</label>
                        </div>
                       </div>
                  </div>
                      <div className="text-[14px] mb-[40px]">
                          <label className="block mb-[8px]">Тайлбар</label>
                          <input type="text" name="disciplineTitle" value={formData.disciplineTitle} onChange={handleFormChange} className="rounded-[8px] border w-full h-[40px]"/>
                      </div>
                      <div className="flex justify-between">
                <button className="mt-[40px] bg-[#D0A616] text-white rounded-[8px]" onClick={handlePrev}>
                  <div className="px-[24px] py-[7px]">ӨМНӨХ</div>
                </button>
                <button className="mt-[40px] bg-[#D0A616] text-white rounded-[8px]" onClick={handleNext}>
                  <div className="px-[24px] py-[7px]">ДАРААХ</div>
                </button>
                </div>
                </div>
                
              )}
              {step === 6 && (
                <div className="indi">
                <div className="xl:flex gap-[13px] mb-[40px]">
                            <div>
                            <label className="block mb-[8px]">Таны давуу тал</label>
                            <input type="text" name="advantage" value={formData.advantage} onChange={handleFormChange} className="rounded-[8px] w-full xl:w-[388px] h-[40px] border"/>
                            </div>
                            <div>
                            <label className="block mb-[8px]">Таны сул тал</label>
                            <input type="text" name="weakness" value={formData.weakness} onChange={handleFormChange} className="rounded-[8px] w-full xl:w-[388px] h-[40px] border"/>
                            </div>
                        </div>
                        <div className="flex gap-[13px] mb-[40px]">
                            <div className="w-full">
                            <label className="block mb-[8px]">Таны ирээдүйн зорилго:</label>
                            <input type="text" name="futureGoals" value={formData.futureGoals} onChange={handleFormChange} className="rounded-[8px] w-full h-[40px] border"/>
                            </div>
                        </div>
                        <div className="flex gap-[13px] mb-[40px]">
                            <div className="w-full">
                            <label className="block mb-[8px]">Өөрийнхөө талаарх нэмж танилцуулах боломж: </label>
                            <input type="text" name="yourself" value={formData.yourself} onChange={handleFormChange} className="rounded-[8px] w-full h-[40px] border"/>
                            </div>
                        </div>
                        <div className="flex mt-[40px]">
                        <button className=" bg-[#D0A616] text-white rounded-[8px]" onClick={handlePrev}>
                        <div className="px-[24px] py-[7px]">ӨМНӨХ</div>
                      </button>
                      <div className="flex w-full justify-end contrast-more:text-[#000]">
                            <button className={`border py-[7px] px-[24px] rounded-[8px] text-[16px] font-[400] bg-[#2E8683] ${submitButtonClicked ? 'bg-[#4ade80]' : 'bg-[#2E8683]'} text-white`} type="submit">{submitButtonClicked ? 'ИЛГЭЭГДЛЭЭ' : 'АНКЕТ ИЛГЭЭХ'}</button>
                        </div>
           </div>
                </div>
              )}
            </main>
           
    </div>
    </form>
        </>
    )
}

export default Anket