import { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import { auth } from "../../../../firebase";


function AdminNav(){
  const navigate = useNavigate();
  const [dropdowns, setDropdowns] = useState([
        {
          title: 'Мэдээ',
          url:'/admin/posts/news'
        },
        {
          title: 'Хамтран ажиллах',
          url:'/admin/mechanical/rent'
        },
        {
          title: 'Хүний Нөөц',
          url:'/admin/humanity/hire'
        },
        {
          title: 'Анкет',
          url:'/admin/anket/hired'
        }
      ]);

      const toggleDropdown = (index) => {
        const updatedDropdowns = dropdowns.map((dropdown, i) => ({
          ...dropdown,
          isOpen: index === i ? !dropdown.isOpen : false // Toggle clicked dropdown, close others
        }));
        setDropdowns(updatedDropdowns);
      };

      const logout = () => {
        auth.signOut().then(() => {
          navigate("/auth");
        }).catch((error) => {
          console.log(error);
        });
      };
    
    return(
      <nav className="relative">
      <div className="h-full fixed">
      <ul className="bg-[#2b4287] w-max p-5 h-4/5 leading-10">
        <li className="w-full mb-20 flex justify-center">
        <a href="/admin">
        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="50" viewBox="0 0 78 50" fill="none">
              <g clipPath="url(#clip0_322_545)">
              <path d="M69.786 10.8743C69.5869 11.7564 69.3987 12.5836 69.2141 13.4108C68.3489 17.2777 67.4855 21.1446 66.6221 25.0116C66.1425 27.1546 65.6592 29.2976 65.1941 31.4443C65.1361 31.7151 65.0149 31.7353 64.7977 31.6968C63.0673 31.3821 61.337 31.071 59.6048 30.758C59.5813 30.7544 59.5577 30.7525 59.5342 30.7489C58.9242 30.6354 58.9441 30.6171 59.0944 30.0004C59.3948 28.776 59.65 27.5407 59.927 26.3091C60.4283 24.0709 60.9333 21.8346 61.4347 19.5964C61.46 19.4811 61.4709 19.364 61.4999 19.1608C60.9695 19.2615 60.4826 19.3402 60.003 19.4482C57.6934 19.9643 55.3839 20.4803 53.0798 21.0184C52.7503 21.0952 52.5494 21.0074 52.3268 20.7786C49.6933 18.0591 47.0525 15.3488 44.4117 12.6366C44.314 12.536 44.1999 12.4555 44.0316 12.3127C44.0153 12.4829 43.9972 12.5817 43.9972 12.6806C43.9972 18.0903 43.999 23.5 44.0026 28.9096C44.0026 29.4038 44.0081 29.4038 43.5067 29.4038C41.7293 29.4038 39.9537 29.4038 38.1763 29.4038C38.0351 29.4038 37.8957 29.4038 37.7093 29.4038C37.7093 23.7159 37.7093 18.0628 37.7093 12.2798C37.4523 12.4847 37.2658 12.6019 37.1156 12.7556C34.5255 15.4184 31.9354 18.0793 29.3616 20.7585C29.0792 21.0513 28.824 21.1026 28.453 21.0165C26.7027 20.6121 24.947 20.2351 23.1949 19.8416C22.3243 19.6476 21.4573 19.4409 20.5885 19.245C20.4655 19.2176 20.3388 19.2121 20.1523 19.1883C21.003 23.0168 21.8411 26.7922 22.6845 30.5951C20.565 30.9666 18.5469 31.3217 16.5052 31.6804C14.9522 24.7279 13.4137 17.8359 11.8535 10.8413C12.5522 10.9731 13.1459 11.0664 13.7305 11.2C15.6907 11.6447 17.6473 12.1078 19.6075 12.5525C21.9497 13.0832 24.2972 13.5993 26.6394 14.1282C26.8765 14.1812 27.0448 14.1263 27.2131 13.9506C29.6566 11.4306 32.1074 8.91794 34.5508 6.3961C36.4767 4.41047 38.3935 2.41569 40.3175 0.428237C40.4731 0.26719 40.6487 0.122615 40.7808 0C41.4071 0.603924 42.0225 1.16942 42.6053 1.76602C46.4136 5.6659 50.2236 9.56762 54.0155 13.484C54.8463 14.3423 54.5296 14.2142 55.659 13.9708C58.4844 13.3614 61.2989 12.7098 64.1189 12.0785C65.8366 11.6942 67.5543 11.3153 69.2738 10.9365C69.4204 10.9036 69.5724 10.8981 69.7824 10.8743H69.786Z" fill="white"/>
              <path d="M5.56018 36.4202C7.25615 35.6168 8.97745 34.9031 10.7693 34.3577C13.1984 33.6184 15.6527 32.9998 18.1469 32.5533C20.1614 32.1928 22.1814 31.8579 24.2067 31.5797C27.6313 31.1094 31.0721 30.7543 34.5255 30.6756C38.5401 30.5841 42.5601 30.5622 46.5747 30.6665C49.4164 30.7397 52.2562 31.027 55.0907 31.2997C56.8663 31.4699 58.6347 31.7517 60.394 32.0518C62.3506 32.3849 64.309 32.7308 66.2384 33.1902C68.1226 33.6404 69.9761 34.2187 71.8313 34.7841C72.7399 35.0605 73.6196 35.4283 74.5101 35.7632C74.6603 35.82 74.7961 35.9133 74.9156 36.0597C74.4088 35.9774 73.9038 35.8895 73.3952 35.8163C70.4974 35.3936 67.6032 34.947 64.7018 34.5627C63.2628 34.3724 61.8076 34.2973 60.3614 34.1729C58.7976 34.0375 57.2337 33.8966 55.6699 33.7758C54.9929 33.7245 54.3124 33.7136 53.6336 33.6916C49.7277 33.5671 45.8217 33.4226 41.9139 33.3329C40.1275 33.2908 38.3356 33.3164 36.5491 33.3787C32.9291 33.5031 29.3073 33.6221 25.6927 33.8453C23.0121 34.01 20.3315 34.2717 17.6654 34.6103C14.2192 35.0477 10.7874 35.6022 7.34845 36.1128C6.75116 36.2006 6.15748 36.3214 5.56199 36.4257L5.56018 36.4202Z" fill="white"/>
              <path d="M47.791 49.9591C48.4788 48.0064 49.1449 46.0446 49.8671 44.1047C50.0843 43.5209 50.0734 43.0286 49.8417 42.454C49.1901 40.8362 48.5983 39.1928 47.9829 37.5585C47.9412 37.4487 47.9087 37.3352 47.858 37.187C48.8209 37.187 49.7512 37.1815 50.6816 37.198C50.7558 37.198 50.8662 37.3535 50.8952 37.456C51.1938 38.523 51.478 39.5917 51.7947 40.7703C52.126 39.513 52.4318 38.3564 52.7395 37.1962C53.7242 37.1962 54.6799 37.1962 55.6844 37.1962C55.5016 37.7122 55.3296 38.2045 55.1541 38.6968C54.6418 40.1243 54.1188 41.5499 53.621 42.9828C53.5577 43.1677 53.5613 43.4147 53.6264 43.5996C54.2038 45.2466 54.8029 46.8864 55.3966 48.528C55.4328 48.6286 55.4708 48.7274 55.5686 48.8281C56.1116 44.9538 56.6546 41.0777 57.1976 37.2035C58.6238 37.2035 60.0085 37.2035 61.4167 37.2035C61.9397 40.7849 62.4592 44.3536 62.9805 47.9222C63.0094 47.9222 63.0366 47.9204 63.0656 47.9186C63.5651 44.3572 64.0629 40.7959 64.566 37.2108C64.6837 37.2016 64.7851 37.1888 64.8882 37.1888C66.0738 37.1888 67.2575 37.1962 68.4431 37.1815C68.7146 37.1779 68.8032 37.2565 68.8431 37.5347C69.2069 40.1023 69.5906 42.6662 69.9634 45.2338C70.1915 46.8095 70.4087 48.3852 70.6313 49.9609C69.6739 49.9609 68.7164 49.9609 67.7589 49.9609C67.6919 49.1831 67.6231 48.4035 67.5543 47.6001C67.1073 47.6001 66.7 47.6312 66.3 47.591C65.9163 47.5525 65.8403 47.7282 65.8149 48.0595C65.7643 48.6945 65.6774 49.3277 65.605 49.9609C63.8819 49.9609 62.1569 49.9609 60.4338 49.9609C60.4157 49.8914 60.3868 49.8237 60.3813 49.7523C60.3252 49.1502 60.28 48.5481 60.2112 47.9478C60.1985 47.8289 60.1026 47.6239 60.0374 47.6221C59.5306 47.5946 59.022 47.6074 58.4971 47.6074C58.4211 48.4236 58.3505 49.1923 58.2799 49.9609C56.4844 49.9609 54.6889 49.9609 52.8934 49.9609C52.8753 49.8456 52.868 49.7248 52.8337 49.6132C52.6237 48.9251 52.4065 48.2388 52.1929 47.5525C52.0698 47.1554 51.9486 46.7583 51.8273 46.3612C51.5866 46.9687 51.4056 47.5635 51.2354 48.1619C51.0653 48.7604 50.9024 49.3606 50.7377 49.9609C49.7567 49.9609 48.7738 49.9609 47.7928 49.9609L47.791 49.9591ZM59.9596 45.1533C59.8999 44.5549 59.8456 43.993 59.7877 43.4294C59.6772 42.3624 59.5686 41.2937 59.4474 40.2286C59.4347 40.1224 59.3424 40.0254 59.2881 39.9248C59.2356 40.0254 59.1505 40.1224 59.1379 40.2286C59.0872 40.6477 59.0582 41.0686 59.0238 41.4895C58.9225 42.701 58.8247 43.9144 58.7216 45.1533C59.1288 45.1533 59.5162 45.1533 59.9596 45.1533ZM67.3335 45.157C67.281 44.65 67.234 44.1815 67.1869 43.7149C67.0656 42.5143 66.9462 41.3157 66.8159 40.117C66.8086 40.0474 66.7145 39.9888 66.662 39.9248C66.615 39.9815 66.5462 40.0328 66.5263 40.0987C66.4919 40.2121 66.481 40.3347 66.4702 40.4555C66.3978 41.3083 66.3272 42.163 66.2584 43.0176C66.2023 43.724 66.1498 44.4304 66.0937 45.1588C66.519 45.1588 66.9064 45.1588 67.3317 45.1588L67.3335 45.157Z" fill="white"/>
              <path d="M31.1263 49.9591C31.1263 45.717 31.1263 41.4767 31.1263 37.2108C35.083 37.2108 39.0089 37.2108 42.9601 37.2108C42.9601 37.9941 42.9601 38.7719 42.9601 39.5881C42.5329 39.5881 42.1166 39.6064 41.704 39.5826C41.4144 39.5661 41.3438 39.6668 41.3456 39.9523C41.3564 43.1329 41.3528 46.3118 41.351 49.4924C41.351 49.648 41.3365 49.8054 41.3275 49.9609C40.37 49.9609 39.4125 49.9609 38.455 49.9609C38.4568 46.5643 38.4604 43.1677 38.4622 39.7711C38.4622 39.7162 38.4387 39.6613 38.417 39.5679C37.874 39.5679 37.3419 39.5679 36.788 39.5679C36.788 38.8762 36.788 38.2283 36.788 37.5787C36.7699 37.5787 36.7536 37.5787 36.7355 37.5787C36.7355 38.2393 36.7355 38.8981 36.7355 39.5954C35.8178 39.5954 34.9255 39.5954 34.0024 39.5954C34.0024 43.0762 34.0024 46.5186 34.0024 49.9609C33.0449 49.9609 32.0875 49.9609 31.13 49.9609L31.1263 49.9591Z" fill="white"/>
              <path d="M71.1327 49.9591C71.1254 49.8511 71.111 49.7431 71.111 49.6352C71.111 45.5834 71.111 41.5334 71.111 37.4817C71.111 37.3993 71.12 37.3151 71.1254 37.209C72.0739 37.209 73.0151 37.209 74.0015 37.209C74.0015 38.9128 74.0015 40.6202 74.0015 42.3533C74.4251 42.3533 74.8015 42.3533 75.2088 42.3533C75.2088 40.6312 75.2088 38.9311 75.2088 37.1833C76.1934 37.1833 77.1455 37.1833 78.0993 37.1833C78.0993 41.4419 78.0993 45.7005 78.0993 49.9572C77.1419 49.9572 76.1844 49.9572 75.2269 49.9572C75.2269 48.2461 75.2269 46.5332 75.2269 44.8221C74.7889 44.8221 74.4124 44.8221 74.0051 44.8221C74.0051 46.5515 74.0051 48.2553 74.0051 49.9572C73.0477 49.9572 72.0902 49.9572 71.1327 49.9572V49.9591Z" fill="white"/>
              <path d="M7.35215 49.9591C7.47161 49.1612 7.5965 48.3651 7.71053 47.5672C7.9947 45.5742 8.27706 43.5795 8.5558 41.5847C8.7549 40.1645 8.95219 38.7426 9.14948 37.3224C9.15491 37.2877 9.16939 37.2566 9.18387 37.2053C10.5685 37.2053 11.9532 37.2053 13.3794 37.2053C13.4989 38.0179 13.6184 38.8359 13.7396 39.654C14.0202 41.5627 14.3007 43.4697 14.5795 45.3784C14.8039 46.9047 15.0265 48.4328 15.251 49.9591C14.2935 49.9591 13.336 49.9591 12.3785 49.9591C12.3007 49.185 12.221 48.4109 12.1396 47.602C11.6237 47.602 11.126 47.5946 10.6282 47.6111C10.5649 47.6129 10.4581 47.7337 10.4491 47.8088C10.364 48.5243 10.297 49.2417 10.2228 49.9591C9.26532 49.9591 8.30783 49.9591 7.35034 49.9591H7.35215ZM11.9278 45.1552C11.7577 43.477 11.5948 41.8262 11.4174 40.1755C11.4083 40.0877 11.2979 40.009 11.2346 39.9266C11.1857 40.0236 11.1043 40.1151 11.0952 40.2158C11.0174 41.043 10.9486 41.872 10.8835 42.701C10.8183 43.5136 10.7604 44.328 10.697 45.1552C11.1224 45.1552 11.5079 45.1552 11.9278 45.1552Z" fill="white"/>
              <path d="M22.8674 49.9591C22.9978 48.9562 23.1208 47.9515 23.2584 46.9486C23.5082 45.1222 23.7652 43.2958 24.0222 41.4694C24.2195 40.0621 24.4204 38.6547 24.6249 37.2163C26.0168 37.2163 27.4087 37.2163 28.8422 37.2163C28.9291 37.791 29.0232 38.3821 29.1083 38.975C29.4106 41.0503 29.711 43.1256 30.0115 45.2009C30.2413 46.7876 30.4676 48.3743 30.6957 49.9591C29.7382 49.9591 28.7807 49.9591 27.8232 49.9591C27.7526 49.1813 27.682 48.4035 27.6114 47.6166C27.0395 47.6166 26.5055 47.6166 25.9444 47.6166C25.8521 48.4072 25.7598 49.1831 25.6693 49.9591C24.7353 49.9591 23.8014 49.9591 22.8674 49.9591ZM27.3997 45.1606C27.2295 43.5575 27.0684 42.0001 26.8947 40.4446C26.8748 40.267 26.777 40.0987 26.7155 39.9266C26.6539 40.1042 26.5544 40.278 26.5363 40.4592C26.4331 41.5517 26.3444 42.6443 26.2576 43.7387C26.2195 44.2108 26.1942 44.6867 26.1616 45.1625C26.5996 45.1625 26.9779 45.1625 27.3978 45.1625L27.3997 45.1606Z" fill="white"/>
              <path d="M17.6238 49.9591C17.0392 49.4247 16.4582 48.8849 15.8663 48.3596C15.6835 48.1967 15.6002 48.0284 15.6002 47.7722C15.6093 44.9777 15.6093 42.1831 15.6002 39.3886C15.6002 39.1379 15.6636 38.9604 15.8446 38.7883C16.3532 38.3107 16.8419 37.8129 17.3487 37.3353C17.4337 37.2547 17.5731 37.1925 17.689 37.1907C18.5994 37.1797 19.508 37.1779 20.4184 37.1907C20.5469 37.1907 20.7008 37.2566 20.7949 37.3426C21.3433 37.8477 21.8791 38.3656 22.4112 38.8872C22.4891 38.964 22.5633 39.0867 22.5651 39.191C22.5759 40.1444 22.5723 41.0997 22.5723 42.0825C21.6257 42.0825 20.7008 42.0825 19.7361 42.0825C19.7361 41.2553 19.7361 40.4391 19.7361 39.6046C19.3071 39.6046 18.9179 39.6046 18.5053 39.6046C18.5053 42.2454 18.5053 44.877 18.5053 47.5324C18.8962 47.5324 19.2854 47.5324 19.7216 47.5324C19.7216 46.546 19.7216 45.5505 19.7216 44.5275C20.6827 44.5275 21.5985 44.5275 22.5506 44.5275C22.5578 44.6226 22.5705 44.7269 22.5705 44.8294C22.5705 45.8213 22.5814 46.8132 22.5615 47.8051C22.5578 47.9735 22.471 48.1803 22.3533 48.3011C21.8936 48.7751 21.4031 49.2216 20.9288 49.6828C20.8456 49.7633 20.7822 49.8639 20.7098 49.9573C19.6799 49.9573 18.6501 49.9573 17.622 49.9573L17.6238 49.9591Z" fill="white"/>
              <path d="M1.75017 49.9596C1.40809 49.5808 1.10401 49.1544 0.716668 48.8341C0.16824 48.3821 -0.0743001 47.8642 0.0198196 47.1486C0.0741194 46.7332 0.0288695 46.3049 0.0288695 45.8529C0.933867 45.8529 1.82257 45.8529 2.76015 45.8529C2.76015 46.4038 2.76015 46.9638 2.76015 47.5421C3.18369 47.5421 3.56017 47.5421 3.96561 47.5421C3.96561 46.6106 3.96561 45.6882 3.96561 44.7311C3.45881 44.7311 2.96287 44.7311 2.43978 44.7311C2.43978 43.9167 2.43978 43.1371 2.43978 42.3117C2.9502 42.3117 3.45881 42.3117 3.97466 42.3117C3.97466 41.3857 3.97466 40.5091 3.97466 39.6105C3.57827 39.6105 3.20179 39.6105 2.77825 39.6105C2.77825 40.1266 2.77825 40.639 2.77825 41.1752C1.84429 41.1752 0.955587 41.1752 0.0306798 41.1752C0.0306798 40.4835 0.0252496 39.8082 0.0361096 39.1347C0.0361096 39.0542 0.1067 38.9609 0.170049 38.8968C0.669608 38.3771 1.16917 37.8573 1.68682 37.3559C1.78456 37.2607 1.9547 37.1985 2.09407 37.1967C2.94296 37.182 3.79185 37.1857 4.64255 37.1967C4.7602 37.1967 4.90499 37.2406 4.99187 37.3175C5.5584 37.8189 6.1195 38.3276 6.66069 38.8547C6.78015 38.9718 6.87427 39.1768 6.87789 39.3433C6.89961 40.176 6.8978 41.0124 6.87789 41.8451C6.87427 41.9878 6.78739 42.1671 6.6806 42.2641C6.21543 42.6777 5.72854 43.0675 5.20726 43.5013C5.67424 43.8764 6.11045 44.2479 6.56657 44.5902C6.80006 44.764 6.89961 44.9543 6.89237 45.2545C6.87246 46.0762 6.87608 46.8979 6.89237 47.7196C6.8978 47.9959 6.81454 48.1954 6.61363 48.3839C6.06158 48.9 5.52582 49.4362 4.98282 49.9651C3.90588 49.9651 2.82893 49.9651 1.75017 49.9651V49.9596Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_322_545">
              <rect width="78" height="50" fill="white"/>
              </clipPath>
              </defs>
        </svg>
        </a>
        </li>
        {dropdowns.map((dropdown, index) => (
          <li key={index} className="group flex">
            <a
              href={dropdown.url}
              className="col-span-1 text-[#ffffff] hover:underline cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              {dropdown.title}
            </a>
          </li>
        ))}
        <li>
          <Link className="hover:underline text-[#ffffff]" to="/admin/feedbacks/feedback">
            Санал Хүсэлт
          </Link>
        </li>
      </ul>
      <div className="text-black absolute h-1/5 bg-[#fff] w-full">
      <div className="w-full h-full bg-[#203060] border border-gray-900">
      <div className="flex items-center mt-4">
        <div className="relative flex flex-col items-center w-full">
          <div
            className="mt-4 rounded-full flex items-end justify-end bg-[#fff]">
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
                <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#203060"/>
                <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="#203060" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          <div className="absolute"></div>
          </div>
          <div className="flex flex-col space-y-1 justify-center items-center w-full">
                <div className="mt-2 text-gray-300 z-10 rounded shadow-lg">
                    <button
                      className="hover:bg-blue-500 hover:text-white rounded-md block px-2 py-1 text-xs"
                      onClick={logout}
                    >
                      Гарах
                    </button>
                </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
        </nav>
    )
}

export default AdminNav