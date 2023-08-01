import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { app } from "../firebase";
import { getFirestore, collection,  onSnapshot ,getDocs, query, where } from 'firebase/firestore';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


const db = getFirestore(app);

function Admin() {
  const [feedbacksCount, setFeedbacksCount] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cryptoBasicsQuantity, setCryptoBasicsQuantity] = useState(0);
  const [manageNewsQuantity, setManageNewsQuantity] = useState(0);
  const [manageProjectQuantity, setManageProjectQuantity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const feedbacksCollection = collection(db, 'feedbacks');
    const unsubscribe = onSnapshot(feedbacksCollection, (snapshot) => {
      setFeedbacksCount(snapshot.size); 
    });

    return () => unsubscribe();
  }, []);
  useEffect(() => {
    getPostQuantities();
  }, []);
  const getPostQuantities = async () => {
    const cryptoBasicsQuery = query(collection(db, "posts"), where("type", "==", "basics"));
    const manageNewsQuery = query(collection(db, "posts"), where("type", "==", "news"));
    const manageProjectQuery = query(collection(db, "posts"), where("type", "==", "projects"));
    const [cryptoBasicsSnapshot, manageNewsSnapshot, manageProjectSnapshot] = await Promise.all([
      getDocs(cryptoBasicsQuery),
      getDocs(manageNewsQuery),
      getDocs(manageProjectQuery)
    ]);

    setCryptoBasicsQuantity(cryptoBasicsSnapshot.size);
    setManageNewsQuantity(manageNewsSnapshot.size);
    setManageProjectQuantity(manageProjectSnapshot.size);
  };
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setPhoneNumber(user.phoneNumber);
    }
  }, []);

  const logout = () => {
    auth.signOut().then(() => {
      navigate("/auth");
    }).catch((error) => {
      console.log(error);
    });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
       <div className="bg-[#f5f6f8]  text-center leading-7 font-sans bg-[#eeeff3]">
     
     <div className={`flex h-[70px] bg-[#006cff] items-center text-[#fff] font-sans text-[25px]  `}>
     <div className="">
     <svg xmlns="http://www.w3.org/2000/svg" width="300" height="40" viewBox="0 0 116 40">
       <g id="Group_6354" data-name="Group 6354" transform="translate(0 -0.001)">
         <path id="Path_4936" data-name="Path 4936" d="M0,100.638V115.9l.123.071,2.9,1.676.124.071.123.071.124.071,2.9,1.676.123.071.123.071.123.071,2.9,1.676.124.071.123.071.123.071,2.9,1.676.123.071.123.071.124.071,2.9,1.676V110.512l-2.9,1.676-.124.071v7.7l-.123-.071-.123-.071-.123-.071-2.9-1.676L9.695,118l-.123-.071-.123-.071-2.9-1.676-.123-.071-.123-.071-.123-.071-2.9-1.676-.123-.071-.123-.071V102.527l.123.071.123.071.123.071,2.9,1.676.123.071.124.071.123.071,2.9,1.676.123.071.123-.071,2.9-1.676-2.9-1.676-.123-.071-.124-.071-.123-.071-2.9-1.676-.123-.071-.124-.071-.123-.071-2.9-1.676L3.15,99.1l-.124-.071L2.9,98.962,0,97.285Z" transform="translate(0 -85.201)" fill="#fff"/>
         <path id="Path_4937" data-name="Path 4937" d="M29.129,0l-.123.071L26.1,1.748l-.123.071-.123.071-.124.071-2.9,1.676-.123.071-.123.071-.123.071-2.9,1.676-.123.071-.123.071-.123.071-2.9,1.676-.124.071-.123.071-.124.071-2.9,1.676,2.9,1.676.124.071.123.071.124.071,2.9,1.676.124.071.123.071.123.071,2.9,1.676.124.071.123.071.123.071,2.9,1.676V13.156l-.123-.071-2.9-1.676-.123-.071-.124-.071-.123-.071-2.9-1.676-.123-.071-.123-.071-.123-.071.123-.071.123-.071.123-.071,2.9-1.676.123-.071.124-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.124.071.123.071,2.9,1.676.123.071.123.071.123.071,2.9,1.676.124.071.123.071.123.071,2.9,1.676.123.071.123.071.123.071-.123.071-.123.071-.123.071-2.9,1.676-.123.071-.123.071-.124.071-2.9,1.676-.123.071V16.65l2.9-1.676.123-.071.124-.071.123-.071,2.9-1.676.123-.071.123-.071.124-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676-2.9-1.676-.123-.071L42.1,7.487l-.123-.071L39.07,5.74l-.123-.071L38.824,5.6,38.7,5.527,35.8,3.851l-.123-.071-.124-.071-.123-.071-2.9-1.676L32.4,1.89l-.123-.071-.123-.071L29.252.072Z" transform="translate(-11.409)" fill="#fff"/>
         <path id="Path_4938" data-name="Path 4938" d="M170.073,98.964l-.123.071-.123.071-.123.071-2.9,1.676-.123.071-.124.071-.123.071-2.9,1.676-.123.071-.123.071-.123.071-2.9,1.676,2.9,1.676.123.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071v11.621l-.123.071-.124.071-2.9,1.676-.123.071-.123.071-.123.071-2.9,1.676-.124.071-.123.071-.123.071-2.9,1.676-.123.071-.123.071-.123.071v-7.7l-.123-.071-2.9-1.676V125.2l2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071V97.288Z" transform="translate(-137.379 -85.203)" fill="#fff"/>
         <rect id="Rectangle_5040" data-name="Rectangle 5040" width="8.235" height="2.516" transform="translate(92.395 15.801)" fill="#fff"/>
         <path id="Path_4939" data-name="Path 4939" d="M619.465,129.905h3.19v7.975H625.4v-7.975h3.189v-2.747h-9.128Z" transform="translate(-542.574 -111.44)" fill="#fff"/>
         <path id="Path_4940" data-name="Path 4940" d="M746.238,163.514v-1.308h5.582v-2.679h-8.33v6.735h8.33v-2.679h-5.582Z" transform="translate(-651.094 -139.816)" fill="#fff"/>
         <path id="Path_4941" data-name="Path 4941" d="M851.245,185.323h3.107l1.181-1.8L854,181.267Z" transform="translate(-745.576 -158.875)" fill="#fff"/>
         <path id="Path_4942" data-name="Path 4942" d="M851.386,127.157l7.294,10.722h3.02l-5.188-7.657h0l-.186-.262-1.894-2.8Z" transform="translate(-745.699 -111.439)" fill="#fff"/>
         <path id="Path_4943" data-name="Path 4943" d="M905.206,127.927h-2.863l-1.139,1.665,1.455,2.144Z" transform="translate(-789.381 -112.124)" fill="#fff"/>
         <path id="Path_4944" data-name="Path 4944" d="M383,127.157l-4.188,10.722h2.94l2.823-7.652,1.779,4.841h-1.85l-1.023,2.811h6.855l-4.188-10.722Z" transform="translate(-331.786 -111.439)" fill="#fff"/>
         <path id="Path_4945" data-name="Path 4945" d="M526.67,135.135h-.893v0h-3.19v-7.975h-2.748v10.722h7.745Z" transform="translate(-455.32 -111.439)" fill="#fff"/>
       </g>
     </svg>
     </div>
     <div className="bg-[] text-[20px] w-full flex justify-end items-center ">
     <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-[#6e768e] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          id="dropdown-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {phoneNumber}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6 8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-[#eeeff3] ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-menu"
          >
            <Link
              to="/admin"
              className="block px-4 py-2 text-sm text-[#6e768e] hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Dashbourd
            </Link>
            <Link to="/login" className="block px-4 py-2 text-sm text-[#6e768e] hover:bg-gray-100 hover:text-gray-900" onClick={logout}>
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
    </div>
     </div>
   <div className="flex">
     <div className="w-[300px] bg-[#fff] text-[14px] text-[#6e768e] h-screen p-4 px-8">
          <Link className="flex mt-6 text-[#006cff]" to="/admin">Dashboard</Link>
         <br />
         <Link className="flex" to="/admin/posts/news">Manage News</Link>
         <br />
         <Link className="flex" to="/admin/posts/basics">Manage Crypto Basics</Link>
         <br />
         <Link className="flex" to="/admin/posts/projects">Manage Projects</Link>
         <br /> 
         <Link className="flex" to="/admin/posts/report">Report performance</Link>
         <br /> 
         <Link className="flex" to="/admin/posts/AdminFeedback" >Feedback</Link>
         <br/>
          <div>
          </div>
     </div>
     <div>
        <h1 className='text-[#6e768e] text-[40px] flex font-[500] p-10'>Welcome To Admin</h1>
        <div className="flex text-[#000] grid grid-cols-4 my-10">
            <a href="/admin/posts/AdminFeedback"><div className="text-[#000] bg-[#fff]   h-[120px] mx-2">
              <div className='flex justify-between py-8 px-4'>
                <div className="flex items-center justify-center ml-4">
                  <div className=" rounded-full bg-[#f5f6f8] w-[50px] h-[50px] border-4 flex items-center justify-center text-white text-[24px] font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="10px" height="20px" viewBox="0 0 1920 1920">
                      <path fill='#006cff' d="M84 0v1423.143h437.875V1920l621.235-496.857h692.39V0z" fill-rule="evenodd"/>
                  </svg>
                  </div>
                </div>
                <div>
                  <div className='mx-10 font-sans flex justify-end  text-[#343a40] text-[1.5rem] font-[500]'>{feedbacksCount}</div>
                  <div className='mx-10 font-sans flex justify-center text-[0.8rem] text-[#6c757d]'> Feedbacks</div>
                </div>
              </div>
            </div></a>
            <Link to='/admin/posts/news'>
            <div className="text-[#000] bg-[#fff]  h-[120px] mx-2">
              <div className='flex justify-between py-8 px-4'>
                <div className="flex items-center justify-center ml-4">
                <div className=" rounded-full bg-[#f5f6f8] w-[50px] h-[50px] border-4 flex items-center justify-center text-white text-[24px] font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#006cff" width="10px" height="20px" viewBox="0 0 48 48">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="invisible_box" data-name="invisible box">
                      <rect width="48" height="48" fill="none"/>
                      <rect width="48" height="48" fill="none"/>
                    </g>
                    <g id="icons_Q2" data-name="icons Q2">
                      <path d="M42,4H6A2,2,0,0,0,4,6V42a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V6A2,2,0,0,0,42,4ZM12,16a2,2,0,0,1,2-2h6a2,2,0,0,1,2,2v8a2,2,0,0,1-2,2H14a2,2,0,0,1-2-2ZM34,34H14a2,2,0,0,1,0-4H34a2,2,0,0,1,0,4Zm0-8H28a2,2,0,0,1,0-4h6a2,2,0,0,1,0,4Zm0-8H28a2,2,0,0,1,0-4h6a2,2,0,0,1,0,4Z"/>
                    </g>
                  </g>
                </svg>
                  </div>
                </div>
                <div>
                  <div className='mx-10 font-sans flex justify-end  text-[#343a40] text-[1.5rem] font-[500]'>{manageNewsQuantity}</div>
                  <div className='mx-10 font-sans flex justify-center text-[0.8rem] text-[#6c757d]'> News</div>
                </div>
              </div>
            </div>
            </Link>
            <Link to='/admin/posts/basics'>
            <div className="text-[#000] bg-[#fff]  h-[120px] mx-2">
              <div className='flex justify-between py-8 px-4'>
                <div className="flex items-center justify-center ml-4">
                <div className=" rounded-full bg-[#f5f6f8] w-[50px] h-[50px] border-4 flex items-center justify-center text-white text-[24px] font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#006cff" width="10px" height="20px" viewBox="0 0 24 24"><path d="M8.5,23a9.044,9.044,0,0,0,3.506-.682A7,7,0,1,0,15,9V5.333C15,2.9,12.145,1,8.5,1S2,2.9,2,5.333V18.667C2,21.1,4.855,23,8.5,23ZM15,11a5,5,0,1,1-5,5A5.006,5.006,0,0,1,15,11ZM8.5,3C11.152,3,13,4.23,13,5.333S11.152,7.667,8.5,7.667,4,6.437,4,5.333,5.848,3,8.5,3ZM4,8.482A8.466,8.466,0,0,0,8.5,9.667,8.466,8.466,0,0,0,13,8.482V9.3A7.024,7.024,0,0,0,9.219,12.06c-.239.021-.476.051-.719.051-2.652,0-4.5-1.23-4.5-2.333Zm0,4.445A8.383,8.383,0,0,0,8.268,14.1,6.981,6.981,0,0,0,8,16c0,.178.014.353.027.528C5.636,16.39,4,15.257,4,14.222Zm0,4.444a8.462,8.462,0,0,0,4.49,1.184,7.01,7.01,0,0,0,1.479,2.3A7.835,7.835,0,0,1,8.5,21C5.848,21,4,19.77,4,18.667Z"/></svg>
                  </div>
                </div>
                <div>
                  <div className='mx-10 font-sans flex justify-end  text-[#343a40] text-[1.5rem] font-[500]'>{cryptoBasicsQuantity}</div>
                  <div className='mx-10 font-sans flex justify-center text-[0.8rem] text-[#6c757d]'> CryptoBasics</div>
                </div>
              </div>
            </div>
            </Link>
            <Link to='/admin/posts/projects'>
            <div className="text-[#000] bg-[#fff] h-[120px] mx-2">
              <div className='flex justify-between py-8 px-4'>
                <div className="flex items-center justify-center ml-4">
                <div className=" rounded-full bg-[#f5f6f8] w-[50px] h-[50px] border-4 flex items-center justify-center text-white text-[24px] font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXxlink="http://www.w3.org/1999/xlink" width="10px" height="20px" viewBox="0 0 512 512" version="1.1">                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Combined-Shape" fill="#006cff" transform="translate(64.000000, 34.346667)">
                            <path d="M192,7.10542736e-15 L384,110.851252 L384,332.553755 L192,443.405007 L1.42108547e-14,332.553755 L1.42108547e-14,110.851252 L192,7.10542736e-15 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M341.333,157.655 L213.333,231.555 L213.333,381.82 L341.333333,307.920144 L341.333,157.655 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z"></path>
                        </g>
                    </g>
                </svg>
                  </div>
                </div>
                <div>
                  <div className='mx-10 font-sans flex justify-end  text-[#343a40] text-[1.5rem] font-[500]'>{manageProjectQuantity}</div>
                  <div className='mx-10 font-sans flex justify-center text-[0.8rem] text-[#6c757d]'> Project</div>
                </div>
              </div>
            </div>
            </Link>
        </div>
        </div>
   </div>
 </div>
    </>
  );
}

export default Admin;


