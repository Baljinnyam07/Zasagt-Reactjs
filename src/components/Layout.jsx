import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import FeedBack from './FeedBack';
import AppContainer from './AppContainer';
import { Outlet, useLocation } from "react-router-dom";
import Reverse from './reverse';
import Nav from './Nav';



const Layout =()=> {
  const location = useLocation();
  return (
    <div className='relative'>
            {location.pathname !== '/' ? (<div className='absolute h-[280px] overflow-hidden sm:h-[280px] md:h-[350px] lg:h-[350px] xl:h-[450px] w-full' style={{backgroundImage:'linear-gradient(rgba(35, 53, 107, 0.46), rgba(35, 53, 107, 0.46))'}}>
            </div>) : ('')}
            
            <div className='flex h-16 sm:h-[102px] px-[20px] xl:px-[40px] absolute z-10 items-center w-full justify-between border-b' style={{ background: 'rgba(255, 255, 255, 0.08)' }}>
              <div className='flex items-center'>
                <a href="/">
                    <svg className='my-[24px] w-16 sm:w-[77px]' xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 78 50" fill="none">
                      <g clipPath="url(#clip0_4_1125)">
                          <path d="M69.786 10.8743C69.5869 11.7564 69.3987 12.5836 69.2141 13.4108C68.3489 17.2777 67.4855 21.1446 66.6222 25.0116C66.1425 27.1546 65.6593 29.2976 65.1941 31.4443C65.1362 31.7151 65.0149 31.7353 64.7977 31.6968C63.0673 31.3821 61.337 31.071 59.6048 30.758C59.5813 30.7544 59.5578 30.7525 59.5342 30.7489C58.9243 30.6354 58.9442 30.6171 59.0944 30.0004C59.3949 28.776 59.6501 27.5407 59.927 26.3091C60.4284 24.0709 60.9334 21.8346 61.4347 19.5964C61.4601 19.4811 61.4709 19.364 61.4999 19.1608C60.9696 19.2615 60.4827 19.3402 60.003 19.4482C57.6935 19.9643 55.3839 20.4803 53.0798 21.0184C52.7504 21.0952 52.5495 21.0074 52.3268 20.7786C49.6933 18.0591 47.0525 15.3488 44.4117 12.6366C44.314 12.536 44.2 12.4555 44.0316 12.3127C44.0153 12.4829 43.9972 12.5817 43.9972 12.6806C43.9972 18.0903 43.9991 23.5 44.0027 28.9096C44.0027 29.4038 44.0081 29.4038 43.5067 29.4038C41.7293 29.4038 39.9537 29.4038 38.1763 29.4038C38.0351 29.4038 37.8957 29.4038 37.7093 29.4038C37.7093 23.7159 37.7093 18.0628 37.7093 12.2798C37.4523 12.4847 37.2659 12.6019 37.1156 12.7556C34.5255 15.4184 31.9354 18.0793 29.3616 20.7585C29.0793 21.0513 28.8241 21.1026 28.453 21.0165C26.7027 20.6121 24.947 20.2351 23.195 19.8416C22.3244 19.6476 21.4574 19.4409 20.5886 19.245C20.4655 19.2176 20.3388 19.2121 20.1524 19.1883C21.0031 23.0168 21.8411 26.7922 22.6846 30.5951C20.5651 30.9666 18.5469 31.3217 16.5052 31.6804C14.9523 24.7279 13.4138 17.8359 11.8535 10.8413C12.5522 10.9731 13.1459 11.0664 13.7305 11.2C15.6907 11.6447 17.6473 12.1078 19.6076 12.5525C21.9497 13.0832 24.2973 13.5993 26.6394 14.1282C26.8765 14.1812 27.0448 14.1263 27.2132 13.9506C29.6567 11.4306 32.1074 8.91794 34.5509 6.3961C36.4767 4.41047 38.3935 2.41569 40.3175 0.428237C40.4732 0.26719 40.6487 0.122615 40.7809 0C41.4071 0.603924 42.0225 1.16942 42.6054 1.76602C46.4136 5.6659 50.2236 9.56762 54.0156 13.484C54.8463 14.3423 54.5296 14.2142 55.659 13.9708C58.4844 13.3614 61.299 12.7098 64.1189 12.0785C65.8366 11.6942 67.5543 11.3153 69.2738 10.9365C69.4204 10.9036 69.5725 10.8981 69.7824 10.8743H69.786Z" fill="white"/>
                          <path d="M5.5602 36.4202C7.25616 35.6168 8.97747 34.9031 10.7694 34.3577C13.1984 33.6184 15.6527 32.9998 18.1469 32.5533C20.1614 32.1928 22.1814 31.8579 24.2068 31.5797C27.6313 31.1094 31.0721 30.7543 34.5255 30.6756C38.5401 30.5841 42.5601 30.5622 46.5747 30.6665C49.4164 30.7397 52.2562 31.027 55.0907 31.2997C56.8663 31.4699 58.6347 31.7517 60.394 32.0518C62.3506 32.3849 64.309 32.7308 66.2385 33.1902C68.1227 33.6404 69.9761 34.2187 71.8313 34.7841C72.74 35.0605 73.6196 35.4283 74.5101 35.7632C74.6604 35.82 74.7961 35.9133 74.9156 36.0597C74.4088 35.9774 73.9038 35.8895 73.3952 35.8163C70.4974 35.3936 67.6032 34.947 64.7018 34.5627C63.2628 34.3724 61.8076 34.2973 60.3614 34.1729C58.7976 34.0375 57.2337 33.8966 55.6699 33.7758C54.993 33.7245 54.3124 33.7136 53.6337 33.6916C49.7277 33.5671 45.8217 33.4226 41.9139 33.3329C40.1275 33.2908 38.3356 33.3164 36.5491 33.3787C32.9291 33.5031 29.3073 33.6221 25.6928 33.8453C23.0122 34.01 20.3316 34.2717 17.6654 34.6103C14.2192 35.0477 10.7875 35.6022 7.34847 36.1128C6.75117 36.2006 6.15749 36.3214 5.56201 36.4257L5.5602 36.4202Z" fill="white"/>
                          <path d="M47.791 49.9591C48.4788 48.0064 49.1449 46.0446 49.8671 44.1047C50.0843 43.5209 50.0734 43.0286 49.8417 42.454C49.1901 40.8362 48.5983 39.1928 47.9829 37.5585C47.9412 37.4487 47.9087 37.3352 47.858 37.187C48.8209 37.187 49.7512 37.1815 50.6816 37.198C50.7558 37.198 50.8662 37.3535 50.8952 37.456C51.1938 38.523 51.478 39.5917 51.7947 40.7703C52.126 39.513 52.4318 38.3564 52.7395 37.1962C53.7242 37.1962 54.6799 37.1962 55.6844 37.1962C55.5016 37.7122 55.3296 38.2045 55.1541 38.6968C54.6418 40.1243 54.1188 41.5499 53.621 42.9828C53.5577 43.1677 53.5613 43.4147 53.6264 43.5996C54.2038 45.2466 54.8029 46.8864 55.3966 48.528C55.4328 48.6286 55.4708 48.7274 55.5686 48.8281C56.1116 44.9538 56.6546 41.0777 57.1976 37.2035C58.6238 37.2035 60.0085 37.2035 61.4167 37.2035C61.9397 40.7849 62.4592 44.3536 62.9805 47.9222C63.0094 47.9222 63.0366 47.9204 63.0656 47.9186C63.5651 44.3572 64.0629 40.7959 64.566 37.2108C64.6837 37.2016 64.7851 37.1888 64.8882 37.1888C66.0738 37.1888 67.2575 37.1962 68.4431 37.1815C68.7146 37.1779 68.8032 37.2565 68.8431 37.5347C69.2069 40.1023 69.5906 42.6662 69.9634 45.2338C70.1915 46.8095 70.4087 48.3852 70.6313 49.9609C69.6739 49.9609 68.7164 49.9609 67.7589 49.9609C67.6919 49.1831 67.6231 48.4035 67.5543 47.6001C67.1073 47.6001 66.7 47.6312 66.3 47.591C65.9163 47.5525 65.8403 47.7282 65.8149 48.0595C65.7643 48.6945 65.6774 49.3277 65.605 49.9609C63.8819 49.9609 62.1569 49.9609 60.4338 49.9609C60.4157 49.8914 60.3868 49.8237 60.3813 49.7523C60.3252 49.1502 60.28 48.5481 60.2112 47.9478C60.1985 47.8289 60.1026 47.6239 60.0374 47.6221C59.5306 47.5946 59.022 47.6074 58.4971 47.6074C58.4211 48.4236 58.3505 49.1923 58.2799 49.9609C56.4844 49.9609 54.6889 49.9609 52.8934 49.9609C52.8753 49.8456 52.868 49.7248 52.8337 49.6132C52.6237 48.9251 52.4065 48.2388 52.1929 47.5525C52.0698 47.1554 51.9486 46.7583 51.8273 46.3612C51.5866 46.9687 51.4056 47.5635 51.2354 48.1619C51.0653 48.7604 50.9024 49.3606 50.7377 49.9609C49.7567 49.9609 48.7738 49.9609 47.7928 49.9609L47.791 49.9591ZM59.9596 45.1533C59.8999 44.5549 59.8456 43.993 59.7877 43.4294C59.6772 42.3624 59.5686 41.2937 59.4474 40.2286C59.4347 40.1224 59.3424 40.0254 59.2881 39.9248C59.2356 40.0254 59.1505 40.1224 59.1379 40.2286C59.0872 40.6477 59.0582 41.0686 59.0238 41.4895C58.9225 42.701 58.8247 43.9144 58.7216 45.1533C59.1288 45.1533 59.5162 45.1533 59.9596 45.1533ZM67.3335 45.157C67.281 44.65 67.234 44.1815 67.1869 43.7149C67.0656 42.5143 66.9462 41.3157 66.8159 40.117C66.8086 40.0474 66.7145 39.9888 66.662 39.9248C66.615 39.9815 66.5462 40.0328 66.5263 40.0987C66.4919 40.2121 66.481 40.3347 66.4702 40.4555C66.3978 41.3083 66.3272 42.163 66.2584 43.0176C66.2023 43.724 66.1498 44.4304 66.0937 45.1588C66.519 45.1588 66.9064 45.1588 67.3317 45.1588L67.3335 45.157Z" fill="white"/>
                          <path d="M31.1264 49.9591C31.1264 45.717 31.1264 41.4767 31.1264 37.2108C35.083 37.2108 39.0089 37.2108 42.9601 37.2108C42.9601 37.9941 42.9601 38.7719 42.9601 39.5881C42.533 39.5881 42.1167 39.6064 41.704 39.5826C41.4144 39.5661 41.3438 39.6668 41.3456 39.9523C41.3565 43.1329 41.3528 46.3118 41.351 49.4924C41.351 49.648 41.3365 49.8054 41.3275 49.9609C40.37 49.9609 39.4125 49.9609 38.455 49.9609C38.4568 46.5643 38.4605 43.1677 38.4623 39.7711C38.4623 39.7162 38.4388 39.6613 38.417 39.5679C37.874 39.5679 37.3419 39.5679 36.788 39.5679C36.788 38.8762 36.788 38.2283 36.788 37.5787C36.7699 37.5787 36.7536 37.5787 36.7355 37.5787C36.7355 38.2393 36.7355 38.8981 36.7355 39.5954C35.8179 39.5954 34.9256 39.5954 34.0025 39.5954C34.0025 43.0762 34.0025 46.5186 34.0025 49.9609C33.045 49.9609 32.0875 49.9609 31.13 49.9609L31.1264 49.9591Z" fill="white"/>
                          <path d="M71.1327 49.9591C71.1254 49.8511 71.111 49.7431 71.111 49.6352C71.111 45.5834 71.111 41.5334 71.111 37.4817C71.111 37.3993 71.12 37.3151 71.1254 37.209C72.0739 37.209 73.0151 37.209 74.0015 37.209C74.0015 38.9128 74.0015 40.6202 74.0015 42.3533C74.4251 42.3533 74.8015 42.3533 75.2088 42.3533C75.2088 40.6312 75.2088 38.9311 75.2088 37.1833C76.1934 37.1833 77.1455 37.1833 78.0994 37.1833C78.0994 41.4419 78.0994 45.7005 78.0994 49.9572C77.1419 49.9572 76.1844 49.9572 75.2269 49.9572C75.2269 48.2461 75.2269 46.5332 75.2269 44.8221C74.7889 44.8221 74.4124 44.8221 74.0051 44.8221C74.0051 46.5515 74.0051 48.2553 74.0051 49.9572C73.0477 49.9572 72.0902 49.9572 71.1327 49.9572V49.9591Z" fill="white"/>
                          <path d="M7.35211 49.9591C7.47157 49.1612 7.59645 48.3651 7.71048 47.5672C7.99465 45.5742 8.27701 43.5795 8.55575 41.5847C8.75485 40.1645 8.95214 38.7426 9.14943 37.3224C9.15486 37.2877 9.16934 37.2566 9.18382 37.2053C10.5685 37.2053 11.9531 37.2053 13.3794 37.2053C13.4988 38.0179 13.6183 38.8359 13.7396 39.654C14.0201 41.5627 14.3007 43.4697 14.5794 45.3784C14.8039 46.9047 15.0265 48.4328 15.2509 49.9591C14.2934 49.9591 13.3359 49.9591 12.3785 49.9591C12.3006 49.185 12.221 48.4109 12.1395 47.602C11.6237 47.602 11.1259 47.5946 10.6282 47.6111C10.5648 47.6129 10.4581 47.7337 10.449 47.8088C10.3639 48.5243 10.297 49.2417 10.2228 49.9591C9.26527 49.9591 8.30778 49.9591 7.3503 49.9591H7.35211ZM11.9278 45.1552C11.7576 43.477 11.5947 41.8262 11.4174 40.1755C11.4083 40.0877 11.2979 40.009 11.2345 39.9266C11.1857 40.0236 11.1042 40.1151 11.0952 40.2158C11.0173 41.043 10.9486 41.872 10.8834 42.701C10.8182 43.5136 10.7603 44.328 10.697 45.1552C11.1223 45.1552 11.5079 45.1552 11.9278 45.1552Z" fill="white"/>
                          <path d="M22.8674 49.9591C22.9977 48.9562 23.1208 47.9515 23.2583 46.9486C23.5081 45.1222 23.7651 43.2958 24.0221 41.4694C24.2194 40.0621 24.4203 38.6547 24.6249 37.2163C26.0168 37.2163 27.4086 37.2163 28.8422 37.2163C28.929 37.791 29.0232 38.3821 29.1082 38.975C29.4105 41.0503 29.711 43.1256 30.0114 45.2009C30.2413 46.7876 30.4675 48.3743 30.6956 49.9591C29.7381 49.9591 28.7806 49.9591 27.8231 49.9591C27.7525 49.1813 27.682 48.4035 27.6114 47.6166C27.0394 47.6166 26.5055 47.6166 25.9444 47.6166C25.8521 48.4072 25.7597 49.1831 25.6692 49.9591C24.7353 49.9591 23.8013 49.9591 22.8674 49.9591ZM27.3996 45.1606C27.2295 43.5575 27.0684 42.0001 26.8946 40.4446C26.8747 40.267 26.777 40.0987 26.7154 39.9266C26.6539 40.1042 26.5543 40.278 26.5362 40.4592C26.4331 41.5517 26.3444 42.6443 26.2575 43.7387C26.2195 44.2108 26.1941 44.6867 26.1616 45.1625C26.5996 45.1625 26.9779 45.1625 27.3978 45.1625L27.3996 45.1606Z" fill="white"/>
                          <path d="M17.6238 49.9591C17.0392 49.4247 16.4582 48.8849 15.8663 48.3596C15.6835 48.1967 15.6003 48.0284 15.6003 47.7722C15.6093 44.9777 15.6093 42.1831 15.6003 39.3886C15.6003 39.1379 15.6636 38.9604 15.8446 38.7883C16.3532 38.3107 16.8419 37.8129 17.3487 37.3353C17.4338 37.2547 17.5731 37.1925 17.689 37.1907C18.5994 37.1797 19.508 37.1779 20.4185 37.1907C20.547 37.1907 20.7008 37.2566 20.7949 37.3426C21.3434 37.8477 21.8791 38.3656 22.4113 38.8872C22.4891 38.964 22.5633 39.0867 22.5651 39.191C22.576 40.1444 22.5723 41.0997 22.5723 42.0825C21.6257 42.0825 20.7008 42.0825 19.7361 42.0825C19.7361 41.2553 19.7361 40.4391 19.7361 39.6046C19.3071 39.6046 18.918 39.6046 18.5053 39.6046C18.5053 42.2454 18.5053 44.877 18.5053 47.5324C18.8963 47.5324 19.2854 47.5324 19.7216 47.5324C19.7216 46.546 19.7216 45.5505 19.7216 44.5275C20.6827 44.5275 21.5986 44.5275 22.5506 44.5275C22.5579 44.6226 22.5705 44.7269 22.5705 44.8294C22.5705 45.8213 22.5814 46.8132 22.5615 47.8051C22.5579 47.9735 22.471 48.1803 22.3533 48.3011C21.8936 48.7751 21.4031 49.2216 20.9289 49.6828C20.8456 49.7633 20.7823 49.8639 20.7099 49.9573C19.68 49.9573 18.6501 49.9573 17.622 49.9573L17.6238 49.9591Z" fill="white"/>
                          <path d="M1.75017 49.9596C1.40809 49.5808 1.10401 49.1544 0.716668 48.8341C0.16824 48.3821 -0.0743001 47.8642 0.0198196 47.1486C0.0741194 46.7332 0.0288695 46.3049 0.0288695 45.8529C0.933867 45.8529 1.82257 45.8529 2.76015 45.8529C2.76015 46.4038 2.76015 46.9638 2.76015 47.5421C3.18369 47.5421 3.56017 47.5421 3.96561 47.5421C3.96561 46.6106 3.96561 45.6882 3.96561 44.7311C3.45881 44.7311 2.96287 44.7311 2.43978 44.7311C2.43978 43.9167 2.43978 43.1371 2.43978 42.3117C2.9502 42.3117 3.45881 42.3117 3.97466 42.3117C3.97466 41.3857 3.97466 40.5091 3.97466 39.6105C3.57827 39.6105 3.20179 39.6105 2.77825 39.6105C2.77825 40.1266 2.77825 40.639 2.77825 41.1752C1.84429 41.1752 0.955587 41.1752 0.0306798 41.1752C0.0306798 40.4835 0.0252496 39.8082 0.0361096 39.1347C0.0361096 39.0542 0.1067 38.9609 0.170049 38.8968C0.669608 38.3771 1.16917 37.8573 1.68682 37.3559C1.78456 37.2607 1.9547 37.1985 2.09407 37.1967C2.94296 37.182 3.79185 37.1857 4.64255 37.1967C4.7602 37.1967 4.90499 37.2406 4.99187 37.3175C5.5584 37.8189 6.1195 38.3276 6.66069 38.8547C6.78015 38.9718 6.87427 39.1768 6.87789 39.3433C6.89961 40.176 6.8978 41.0124 6.87789 41.8451C6.87427 41.9878 6.78739 42.1671 6.6806 42.2641C6.21543 42.6777 5.72854 43.0675 5.20726 43.5013C5.67424 43.8764 6.11045 44.2479 6.56657 44.5902C6.80006 44.764 6.89961 44.9543 6.89237 45.2545C6.87246 46.0762 6.87608 46.8979 6.89237 47.7196C6.8978 47.9959 6.81454 48.1954 6.61363 48.3839C6.06158 48.9 5.52582 49.4362 4.98282 49.9651C3.90588 49.9651 2.82893 49.9651 1.75017 49.9651V49.9596Z" fill="white"/>
                      </g>
                      <defs>
                          <clipPath id="clip0_4_1125">
                          <rect width="78" height="50" fill="white"/>
                          </clipPath>
                      </defs>
                    </svg>
                </a>
              </div>
              <div className="flex py-[40px]">
                  <Nav/>
                  <div className="hidden lg:block">
                  <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect width="33" height="16" fill="url(#pattern0)"/>
                  <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_322_603" transform="matrix(0.0015625 0 0 0.00322266 0 -0.015625)"/>
                  </pattern>
                  <image id="image0_322_603" width="640" height="320" xlinkHref="data:image/png;base64,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"/>
                  </defs>
                  </svg>
                  <div className='border-l h-[102px] absolute top-0 right-[110px]'></div>
                  </div>
              </div>
            </div>
            <div className=''>
              <Header/>
            </div>
      <div className="">
        <Outlet/>
      </div>
        <div className='bg-[#23356B]'>
          <AppContainer>
          <div className=''>
          <FeedBack/>
          </div>
          </AppContainer>
        </div>
        <AppContainer>
        <div>
        <Contact/>
        </div>
        </AppContainer>
        <AppContainer>
        <div>
        <Footer/>
        </div>
        </AppContainer>
        <div className='border-t'>
          <AppContainer>
            <Reverse/>
          </AppContainer>
        </div>
    </div>
  )
}

export default Layout