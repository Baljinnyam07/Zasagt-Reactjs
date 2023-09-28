import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const HireCreate = ({ onClose}) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState((new Date()).toJSON().slice(0, 10));
  const [addInformation, setAddInformation] = useState("");
  const [basicIssues, setBasicIssues] = useState("");
  const [industry, setIndustry] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [level, setLevel] = useState("");
  const [locations, setLocations] = useState("");
  const [requirements, setRequirements] = useState([]); 
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const urlType = pathSegments[2];
  const [dataType] = useState(urlType);
  const navigate = useNavigate();
  const { type, postId } = useParams();

  useEffect(() => {
    if (postId) {
      const docRef = doc(db, dataType, postId);
      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title);
          setDate(data.date);
          setAddInformation(data.addinformation);
          setBasicIssues(data.basicissues);
          setIndustry(data.industry);
          setJobLocation(data.joblocation);
          setJobType(data.jobtype);
          setLevel(data.level);
          setLocations(data.location);
          setRequirements(data.requirements || []);
        } else {
          console.log("No such document!");
        }
      });
    }
  }, [dataType, postId]);

  const save = async () => {
    if (!dataType) {
      console.error("dataType is empty");
      return;
    }
    if (postId) {
      await updateDoc(doc(db, dataType, postId), {
        title: title,
        date: date,
        type: type,
        addinformation: addInformation,
        basicissues: basicIssues,
        industry: industry,
        joblocation: jobLocation,
        jobtype: jobType,
        level: level,
        location: locations,
        requirements: requirements,
      });
      navigate(`/${type}/${postId}`);
    } else {
      const docRef = await addDoc(collection(db, dataType), {
        title: title,
        date: date,
        type: type,
        addinformation: addInformation,
        basicissues: basicIssues,
        industry: industry,
        joblocation: jobLocation,
        jobtype: jobType,
        level: level,
        location: locations,
        requirements: requirements,
      });
      navigate(`/admin/humanity/hire`);
    }
  };
  const handleRequirementChange = (value, index) => {
    const updatedRequirements = [...requirements];
    updatedRequirements[index] = value;
    setRequirements(updatedRequirements);
  };
  
  const removeRequirement = (index) => {
    const updatedRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(updatedRequirements);
  };
  
  const addRequirement = () => {
    const updatedRequirements = [...requirements, ""];
    setRequirements(updatedRequirements);
  };
  return <>
    <div className="flex bg-[#94a3b8]">
    <button
        className="btn-remove text-rose-700 rounded-full p-2 bg-rose-300 hover:-translate-y-1 absolute top-[95px] right-[20px]"
        onClick={onClose} // Close the edit modal when this button is clicked
      >
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xmlSpace="preserve">
        <g>
          <g>
            <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512     512,452.922 315.076,256   "/>
          </g>
        </g>
        </svg>
      </button>
      <div className="col-span-3 items-center p-4 w-[1200px]">
        <div className="bg-[#374151] text-[#fff] rounded-xl border-r h-max p-8">
          <h2 className="text-2xl font-semibold mb-6">Нээлттэй ажлын байр</h2>
          <div className="mb-6">
            <label htmlFor="title" className="block text-[#fff] font-semibold mb-1">Албан тушаалын нэр</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-input w-full bg-[#4b5563] rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
              <div className="mb-6">
              <label htmlFor="locations" className="block text-[#fff] font-semibold mb-1">Байршил</label>
              <input
                  type="text"
                  name="locations"
                  id="locations"
                  className="form-input w-full bg-[#4b5563] rounded"
                  value={locations}
                  onChange={(e) => setLocations(e.target.value)}
              />
              </div>
              <div className="mb-6">
              <label htmlFor="date" className="block text-[#fff] font-semibold mb-1">Огноо</label>
              <input
                  type="date"
                  name="date"
                  id="date"
                  className="form-input w-full bg-[#4b5563] rounded"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
              />
              </div>
          </div>
          <div className="mb-6">
            <label htmlFor="basicIssues" className="block text-[#fff] font-semibold mb-1">Гүйцэтгэх үндсэн үүрэг</label>
            <textarea
              name="basicIssues"
              id="basicIssues"
              className="form-textarea w-full bg-[#4b5563] rounded"
              value={basicIssues}
              onChange={(e) => setBasicIssues(e.target.value)}
            />
          </div>
          <div className="mb-6">
              <label htmlFor="requirements" className="block text-[#fff] font-semibold mb-1">Ажлын байранд тавигдах шаардлага</label>
              <div>
                  {requirements.map((req, index) => (
                  <div key={index} className="flex items-center mb-2">
                      <input
                      type="text"
                      className="form-input w-full bg-[#4b5563]"
                      value={req}
                      onChange={(e) => handleRequirementChange(e.target.value, index)}
                      />
                      <button
                      className="ml-2 text-red-500"
                      onClick={() => removeRequirement(index)}
                      >
                      Remove
                      </button>
                  </div>
                  ))}
                  <button
                  className="text-[#2dd4bf]"
                  onClick={addRequirement}
                  >
                  Шаардлага
                  </button>
              </div>
              </div>
          <div className="mb-6">
            <label htmlFor="addInformation" className="block text-[#fff] font-semibold mb-1">Нэмэлт мэдээлэл</label>
            <textarea
              name="addInformation"
              id="addInformation"
              className="form-textarea w-full bg-[#4b5563] rounded"
              value={addInformation}
              onChange={(e) => setAddInformation(e.target.value)}
            />
          </div>
          
          <div>
              <h1 className="block text-[#fff] font-semibold mb-1 py-6">Бусад</h1>
              <div className="mb-6 flex gap-3">
              <label htmlFor="jobLocation" className="block text-[#fff] mb-1 w-40">Байршил:</label>
              <input
                  type="text"
                  name="jobLocation"
                  id="jobLocation"
                  className="form-textarea w-full bg-[#4b5563] rounded"
                  value={jobLocation}
                  onChange={(e) => setJobLocation(e.target.value)}
              />
              </div>
              <div className="mb-6 flex gap-3">
              <label htmlFor="industry" className="block text-[#fff] mb-1 w-40">Салбар:</label>
              <input
                  type="text"
                  name="industry"
                  id="industry"
                  className="form-input w-full bg-[#4b5563] rounded"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
              />
              </div>
              <div className="mb-6 flex gap-3">
              <label htmlFor="industry" className="block text-[#fff] mb-1 w-40">Түвшин:</label>
              <input
                  type="text"
                  name="level"
                  id="level"
                  className="form-input w-full bg-[#4b5563] rounded"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
              />
              </div>
              
              <div className="mb-6 flex gap-3">
              <label htmlFor="jobType" className="block text-[#fff] mb-1 w-40">Төрөл:</label>
              <input
                  type="text"
                  name="jobType"
                  id="jobType"
                  className="form-textarea w-full bg-[#4b5563] rounded"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
              />
              </div>
          </div>
          <div className="flex justify-end">
            <a href="/admin/humanity/hire"
              className="bg-green-500 text-white px-6 py-2 rounded"
              onClick={save}
            >
              Save
            </a>
          </div>
        </div>
      </div>
    <div className="col-span-3 p-4">
    <div className="bg-white rounded border w-[900px]">
              <div className="border-b">
              <div className="py-[16px] px-[24px]">
              <div className="text-[16px] flex justify-between font-[500] text-[#23356B] mb-[24px] ">
                <div className="break-words">
                    {title}
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
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.00014 14.1257L8.4809 13.584C9.02643 12.9593 9.51709 12.3665 9.95366 11.8027L10.314 11.3273C11.8188 9.29983 12.5716 7.69069 12.5716 6.50136C12.5716 3.96269 10.5251 1.90479 8.00014 1.90479C5.47519 1.90479 3.42871 3.96269 3.42871 6.50136C3.42871 7.69069 4.18147 9.29983 5.68623 11.3273L6.04662 11.8027C6.66943 12.6007 7.32103 13.3751 8.00014 14.1257Z" stroke="#8F9099" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.00047 8.38081C9.05244 8.38081 9.90523 7.52802 9.90523 6.47605C9.90523 5.42408 9.05244 4.57129 8.00047 4.57129C6.94849 4.57129 6.0957 5.42408 6.0957 6.47605C6.0957 7.52802 6.94849 8.38081 8.00047 8.38081Z" stroke="#8F9099" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="text-[12px] text-[#8F9099] font-400">
                        {locations}
                    </div>
                </div>
                <div className="flex items-center gap-[8px]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.75 2.875H11.125V1.875C11.125 1.80625 11.0688 1.75 11 1.75H10.125C10.0562 1.75 10 1.80625 10 1.875V2.875H6V1.875C6 1.80625 5.94375 1.75 5.875 1.75H5C4.93125 1.75 4.875 1.80625 4.875 1.875V2.875H2.25C1.97344 2.875 1.75 3.09844 1.75 3.375V13.75C1.75 14.0266 1.97344 14.25 2.25 14.25H13.75C14.0266 14.25 14.25 14.0266 14.25 13.75V3.375C14.25 3.09844 14.0266 2.875 13.75 2.875ZM13.125 13.125H2.875V7.1875H13.125V13.125ZM2.875 6.125V4H4.875V4.75C4.875 4.81875 4.93125 4.875 5 4.875H5.875C5.94375 4.875 6 4.81875 6 4.75V4H10V4.75C10 4.81875 10.0562 4.875 10.125 4.875H11C11.0688 4.875 11.125 4.81875 11.125 4.75V4H13.125V6.125H2.875Z" fill="#8F9099"/>
                        </svg>
                    </div>
                    <div className="text-[12px] text-[#8F9099] font-400">
                    {date}
                    </div>
                </div>
              </div>
              </div>
              </div>
              <div className="py-[16px] px-[24px] text-[#454655] text-[16px]">
                <div className="font-[500] mb-[8px]">Гүйцэтгэх үндсэн үүрэг</div>
                <div className="font-400 mb-[24px] break-words">
                    {basicIssues}
                </div>
                <div className="mb-[8px] font-[500]">Ажлын байранд тавигдах шаардлага</div>
                <div className="mb-[24px] w-[400px]">
                <ul className="">
                  {requirements.map((item, index) => (
                    <li className="w-[200px] flex flex-wrap" key={index}>{item}</li>
                  ))}
                </ul>
                </div>
                <div className="mb-[8px] font-[500]">Нэмэлт мэдээлэл</div>
              <div className="mb-[24px] break-words">
                {addInformation}
              </div>
                <div className="mb-[8px] font-[500]">Бусад</div>
              <div className="flex gap-[24px] break-words ">
              <div className="">
                <div className="break-words">Байршил:</div>
                <div>Салбар:</div>
                <div>Түвшин:</div>
                <div>Төрөл:</div>
              </div>
              <div>
                <div className="">
                    {jobLocation}
                </div>
                <div className="">
                    {industry}
                </div>
                <div className="">
                    {level}
                </div>
                <div className="">
                    {jobType}
                </div>
              </div>
              </div>
              </div>
            </div>
    </div>
    </div>
  </>;
}

export default HireCreate;