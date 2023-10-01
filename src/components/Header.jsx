import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {ImageCarousel} from './Carousel';
const images = [
    "https://ik.imagekit.io/baljinnyam/ZasagtKhaan/Home/newHeader1.png?updatedAt=1695613724474",
    "https://ik.imagekit.io/baljinnyam/ZasagtKhaan/Home/newHeader2.png?updatedAt=1695613725029",
    "https://ik.imagekit.io/baljinnyam/ZasagtKhaan/Home/newHeader3.png?updatedAt=1695613721903"
];

const Navbar = () => {
  const location = useLocation();
  const [bgImage, setBgImage] = useState('');
  const [svg, setSvg] = useState()
  useEffect(() => {
    const url = location.pathname;
    if (url === '/') {
      setBgImage('');
    } else if (url.startsWith('/project/')) {
      setSvg(
        <svg xmlns="http://www.w3.org/2000/svg" width="162" height="50" viewBox="0 0 162 50" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M162 0H0V50H162V0ZM42.3418 12C48.2197 12 51.937 16.0312 51.937 23.25C51.937 30.375 48.2197 34.5312 42.3418 34.5312C36.4644 34.5312 32.7153 30.5 32.7153 23.2812C32.7153 16.1875 36.4644 12 42.3418 12ZM42.3418 15.1562C39.3555 15.1562 37.3857 17.0625 37.0679 21.8125H47.6162C47.2983 17.0938 45.3604 15.1562 42.3418 15.1562ZM42.3418 31.375C45.3921 31.375 47.3618 29.375 47.6162 24.375H37.0361C37.2905 29.375 39.3555 31.375 42.3418 31.375ZM32.2988 12.4688L31.854 15.75H26.1348V34.0625H21.9097V15.75H16V12.4688H32.2988ZM70.6948 14.2812C68.8838 12.8125 67.0728 12 64.2769 12C58.876 12 54.6821 15.9688 54.6821 23.2188C54.6821 30.5625 58.6533 34.5312 64.3403 34.5312C67.3271 34.5312 69.6147 33.25 70.9487 31.9062L68.979 29.4688C67.7085 30.4062 66.4058 31.2188 64.4995 31.2188C61.3857 31.2188 59.0981 28.9062 59.0981 23.2188C59.0981 17.375 61.4492 15.1875 64.4995 15.1875C65.9927 15.1875 67.2954 15.7188 68.5659 16.7188L70.6948 14.2812ZM76.2661 12.4688H89.6733V34.0625H85.4795V15.7188H79.8882L78.9351 23.9375C78.0771 31.2812 76.8696 33.4375 72.6123 34.5312L71.6274 31.5C73.9468 30.625 74.2646 29.25 74.8999 23.9062L76.2661 12.4688ZM103.501 25.875L110.494 12.583L117.487 25.9062V34.0625H121.745V25.875L128.798 12.4688H124.35L119.711 22.5L115.073 12.4688H110.554H110.434H106.106L101.468 22.5L96.8291 12.4688H92.1904L99.2437 25.9062V34.0625H103.501V25.875ZM146 30.8125H144.125V12.4688H132.084L131.258 19C130.21 27.0312 129.797 29.25 128.304 30.8125H126.747V39H129.797L130.337 34.0625H142.41L142.95 39H146V30.8125ZM135.674 15.625H139.995V30.8125H131.735C133.832 29.1562 134.467 26.5625 135.325 18.8438L135.674 15.625Z" fill="white" fillOpacity="0.7"/>
        </svg>
      )
      setBgImage('https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/tusluud-transformed-bw-real.png?alt=media&token=763d19a2-0a2d-43e3-abaf-79872e9c2d4a');
    } else if (url.startsWith('/posts/')) {
      setSvg(
        <svg xmlns="http://www.w3.org/2000/svg" width="292" height="50" viewBox="0 0 292 50" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M292 0H0V50H292V0ZM55.3477 22.353C55.3477 14.3485 51.8989 11 46.8218 11C43.8838 11 41.936 11.8929 40.1479 13.3918L42.2236 15.8154C43.6284 14.7312 44.7778 14.2209 46.5981 14.2209C48.9932 14.2209 50.749 15.8793 50.9727 20.631H43.0215V23.7562H50.9727C50.813 28.6036 49.1206 30.6765 46.1831 30.6765C44.2671 30.6765 43.1177 30.0387 41.9043 29.082L39.9243 31.5057C41.4253 32.9408 43.4048 33.9932 46.4062 33.9932C51.9629 33.9932 55.3477 29.943 55.3477 22.353ZM38.0332 33.5148L36.3086 11.4784H30.8164L27.1123 26.9135L23.1846 11.4784H17.7563L16 33.5148H20.0874L20.6304 24.426C20.8218 21.2688 20.8857 18.2391 20.7578 15.2733L25.0366 31.123H29.0283L33.0518 15.3053C32.9878 17.6333 33.1475 21.0455 33.3389 24.2985L33.9141 33.5148H38.0332ZM73.4941 30.1981H75.3784V38.5536H72.313L71.77 33.5148H59.6357L59.0928 38.5536H56.0273V30.1981H57.5923C59.0928 28.6036 59.5083 26.3394 60.562 18.1436L61.3921 11.4784H73.4941V30.1981ZM69.3433 30.1981V14.6993H65.0005L64.6489 17.984C63.7871 25.8611 63.1484 28.5079 61.041 30.1981H69.3433ZM92.1128 22.353C92.1128 14.3485 88.6641 11 83.5869 11C80.6494 11 78.7017 11.8929 76.9131 13.3918L78.9888 15.8154C80.394 14.7312 81.5435 14.2209 83.3638 14.2209C85.7583 14.2209 87.5146 15.8793 87.7383 20.631H79.7871V23.7562H87.7383C87.5786 28.6036 85.8862 30.6765 82.9482 30.6765C81.0327 30.6765 79.8828 30.0387 78.6694 29.082L76.6899 31.5057C78.1904 32.9408 80.1704 33.9932 83.1719 33.9932C88.728 33.9932 92.1128 29.943 92.1128 22.353ZM100.177 11C105.254 11 108.703 14.3485 108.703 22.353C108.703 29.943 105.318 33.9932 99.7617 33.9932C96.7598 33.9932 94.7803 32.9408 93.2793 31.5057L95.2593 29.082C96.4727 30.0387 97.6221 30.6765 99.5381 30.6765C102.476 30.6765 104.168 28.6036 104.328 23.7562H96.377V20.631H104.328C104.104 15.8793 102.348 14.2209 99.9531 14.2209C98.1333 14.2209 96.9834 14.7312 95.5786 15.8154L93.5029 13.3918C95.291 11.8929 97.2388 11 100.177 11ZM115.872 31.41C115.872 29.943 114.755 28.8269 113.254 28.8269C111.817 28.8269 110.699 29.943 110.699 31.3782C110.699 32.2711 111.083 33.0365 111.785 33.5148L110.476 39H112.966L115.042 34.2802C115.617 33.0045 115.872 32.2391 115.872 31.41ZM146.886 11.4784L148.61 33.5148H144.491L143.916 24.2985C143.725 21.0455 143.565 17.6333 143.628 15.3053L139.605 31.123H135.614L131.335 15.2733C131.462 18.2391 131.399 21.2688 131.207 24.426L130.664 33.5148H126.577L128.333 11.4784H133.762L137.689 26.9135L141.394 11.4784H146.886ZM165.924 22.353C165.924 14.3485 162.476 11 157.398 11C154.461 11 152.513 11.8929 150.725 13.3918L152.8 15.8154C154.206 14.7312 155.355 14.2209 157.175 14.2209C159.57 14.2209 161.326 15.8793 161.55 20.631H153.599V23.7562H161.55C161.39 28.6036 159.698 30.6765 156.76 30.6765C154.844 30.6765 153.694 30.0387 152.481 29.082L150.501 31.5057C152.002 32.9408 153.982 33.9932 156.983 33.9932C162.54 33.9932 165.924 29.943 165.924 22.353ZM184.071 30.1981H185.955V38.5536H182.89L182.347 33.5148H170.213L169.67 38.5536H166.604V30.1981H168.169C169.67 28.6036 170.085 26.3394 171.139 18.1436L171.969 11.4784H184.071V30.1981ZM179.92 30.1981V14.6993H175.577L175.226 17.984C174.364 25.8611 173.725 28.5079 171.618 30.1981H179.92ZM202.69 22.353C202.69 14.3485 199.241 11 194.164 11C191.226 11 189.278 11.8929 187.49 13.3918L189.566 15.8154C190.971 14.7312 192.121 14.2209 193.94 14.2209C196.335 14.2209 198.092 15.8793 198.315 20.631H190.364V23.7562H198.315C198.156 28.6036 196.463 30.6765 193.525 30.6765C191.609 30.6765 190.46 30.0387 189.247 29.082L187.267 31.5057C188.768 32.9408 190.747 33.9932 193.749 33.9932C199.305 33.9932 202.69 29.943 202.69 22.353ZM210.754 11C215.831 11 219.279 14.3485 219.279 22.353C219.279 29.943 215.895 33.9932 210.338 33.9932C207.337 33.9932 205.357 32.9408 203.856 31.5057L205.836 29.082C207.05 30.0387 208.199 30.6765 210.115 30.6765C213.053 30.6765 214.745 28.6036 214.905 23.7562H206.954V20.631H214.905C214.681 15.8793 212.925 14.2209 210.53 14.2209C208.71 14.2209 207.561 14.7312 206.155 15.8154L204.08 13.3918C205.868 11.8929 207.816 11 210.754 11ZM238.424 11.4784H224.948L223.575 23.1504C222.937 28.6036 222.617 30.0068 220.287 30.8998L221.276 33.9932C225.555 32.877 226.769 30.6765 227.631 23.1823L228.589 14.795H234.209V33.5148H238.424V11.4784ZM248.33 11C253.407 11 256.856 14.3485 256.856 22.353C256.856 29.943 253.471 33.9932 247.915 33.9932C244.913 33.9932 242.934 32.9408 241.433 31.5057L243.413 29.082C244.626 30.0387 245.775 30.6765 247.691 30.6765C250.629 30.6765 252.321 28.6036 252.481 23.7562H244.53V20.631H252.481C252.257 15.8793 250.501 14.2209 248.106 14.2209C246.286 14.2209 245.137 14.7312 243.732 15.8154L241.656 13.3918C243.444 11.8929 245.392 11 248.33 11ZM276 11.4784H262.525L261.151 23.1504C260.513 28.6036 260.194 30.0068 257.863 30.8998L258.853 33.9932C263.131 32.877 264.345 30.6765 265.207 23.1823L266.165 14.795H271.785V33.5148H276V11.4784Z" fill="white" fillOpacity="0.7"/>
        </svg>
      )
      setBgImage('https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/hamtran-ajillah-transformed-bw.png?alt=media&token=a504a6c1-d35f-4f09-8fad-a451fb8b23d5');
    } else if (url.startsWith('/mechanical/')) {
      setSvg(
        <svg xmlns="http://www.w3.org/2000/svg" width="321" height="50" viewBox="0 0 321 50" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M321 0H0V50H321V0ZM33.8268 35.2981L27.4196 23.9093L33.3207 14H28.8231L24.9315 21.4476L21.1994 14H16.5104L22.3796 24.0652L16 35.5326H20.4976L24.8677 26.7139L29.2697 35.5326H33.7521H33.9587H38.1222L39.4938 30.5467H46.7985L48.1701 35.5326H52.6358L45.8096 14H40.6102L33.8268 35.2981ZM45.9691 27.4306H40.3231L43.1302 17.1473L45.9691 27.4306ZM74.2631 14L75.9856 35.5326H71.8707L71.2965 26.5269C71.1051 23.3484 70.9457 20.0142 71.0095 17.7394L66.9903 33.1955H63.003L58.7286 17.7082C58.8562 20.6062 58.7924 23.5666 58.6011 26.6516L58.0588 35.5326H53.9758L55.7302 14H61.1529L65.0764 29.0822L68.7766 14H74.2631ZM93.2617 17.272L93.7083 14H77.3445V17.272H83.2776V35.5326H87.52V17.272H93.2617ZM102.967 14C108.518 14 111.899 16.2125 111.899 20.8555C111.899 25.8102 108.231 28.0227 103.255 28.0227H100.671V35.5326H96.4602V14H102.967ZM102.936 24.9377C105.743 24.9377 107.497 24.0028 107.497 20.8555C107.497 18.1445 105.806 17.0227 102.936 17.0227H100.671V24.9377H102.936ZM123.709 30.5467L125.081 35.5326H129.547L122.72 14H117.521L110.663 35.5326H115.033L116.405 30.5467H123.709ZM122.88 27.4306H117.234L120.041 17.1473L122.88 27.4306ZM144.061 35.5326V25.9037H136.214V35.5326H132.003V14H136.214V22.6317H144.061V14H148.303V35.5326H144.061ZM171.712 30.5467L173.084 35.5326H177.359H177.55H181.92L186.992 25.8102H189.289V35.5326H193.212V25.8102H195.477L200.485 35.5326H205.142L198.89 23.9093L204.536 14H200.293L195.413 22.7252H193.212V14H189.289V22.7252H187.056L182.239 14H177.965L183.611 23.9093L177.479 35.309L170.724 14H165.524L158.666 35.5326H163.036L164.408 30.5467H171.712ZM170.883 27.4306H165.237L168.044 17.1473L170.883 27.4306ZM223.936 35.5326V14H218.864L211.24 31.2946C211.528 29.3314 211.847 27.1501 211.847 23.255V14H207.668V35.5326H212.867L220.363 18.238C220.108 19.983 219.757 22.7875 219.757 26.3711V35.5326H223.936ZM231.428 14H244.889V35.5326H240.679V17.2408H235.064L234.107 25.4363C233.246 32.7592 232.034 34.9093 227.76 36L226.771 32.9773C229.099 32.1048 229.418 30.7337 230.056 25.4051L231.428 14ZM265.853 14H252.392L251.021 25.4051C250.383 30.7337 250.064 32.1048 247.735 32.9773L248.724 36C252.998 34.9093 254.211 32.7592 255.072 25.4363L256.029 17.2408H261.643V35.5326H265.853V14ZM282.703 35.5326L281.331 30.5467H274.027L272.655 35.5326H268.285L275.143 14H280.342L287.122 35.3868L293.421 24.0652L287.552 14H292.241L295.973 21.4476L299.864 14H304.362L298.461 23.9093L305 35.5326H300.311L295.909 26.7139L291.539 35.5326H287.169H287.041H282.703ZM274.856 27.4306H280.502L277.663 17.1473L274.856 27.4306Z" fill="white" fillOpacity="0.7"/>
        </svg>
      )
      setBgImage('https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/hamtran-ajillah-transformed-bw%20(2).png?alt=media&token=32e5ef2c-6d20-4b87-b5af-a96eaa1dd0bb');
    }else if (url.startsWith('/about/')) {
      setSvg(
          <svg xmlns="http://www.w3.org/2000/svg" width="252" height="50" viewBox="0 0 252 50" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M252 0H0V50H252V0ZM127.075 12.8297C124.074 12.8297 122.159 11.1025 121.903 8.44775L124.297 8C124.713 9.34338 125.606 9.88708 127.075 9.88708C128.543 9.88708 129.501 9.34338 129.884 8L132.31 8.44775C132.055 11.1025 130.075 12.8297 127.075 12.8297ZM135.247 14.8447V36.9464H131.065V27.5428C131.065 23.8645 131.416 20.9858 131.672 19.1947L124.17 36.9464H118.967V14.8447H123.148V24.3444C123.148 28.3424 122.829 30.5814 122.542 32.5964L130.171 14.8447H135.247ZM22.8313 22.905C28.1941 22.905 31.4502 25.1439 31.4502 29.7498C31.4502 34.8033 27.843 36.9464 22.8313 36.9464H16V14.8447H28.9602L28.5133 18.1393H20.2136V22.905H22.8313ZM22.7036 33.7799C25.2893 33.7799 27.0131 32.8203 27.0131 29.8137C27.0131 27.127 25.4808 25.9756 22.6078 25.9756H20.2136V33.7799H22.7036ZM51.0466 14.8447V36.9464H46.8649V27.5428C46.8649 23.8645 47.2161 20.9858 47.4714 19.1947L39.9698 36.9464H34.7666V14.8447H38.9484V24.3444C38.9484 28.3412 38.6293 30.58 38.3422 32.5946L45.9711 14.8447H51.0466ZM72.59 33.62H70.7065V14.8447H58.6082L57.7782 21.5297C56.7247 29.7498 56.3098 32.0208 54.8094 33.62H53.2452V42H56.3098L56.8524 36.9464H68.9828L69.5254 42H72.59V33.62ZM66.5566 18.0753V33.62H58.257C60.3639 31.9248 61.0023 29.27 61.8641 21.3698L62.2153 18.0753H66.5566ZM88.1381 36.9464V27.063H80.2853V36.9464H76.0717V14.8447H80.2853V23.7046H88.1381V14.8447H92.3837V36.9464H88.1381ZM113.799 36.9464V14.8447H108.724L101.094 32.5964C101.382 30.5814 101.701 28.3424 101.701 24.3444V14.8447H97.5192V36.9464H102.722L110.224 19.1947C109.969 20.9858 109.617 23.8645 109.617 27.5428V36.9464H113.799ZM162.121 18.2032L162.555 14.9429L169.44 30.9972H170.844C169.855 33.2681 168.578 34.0358 165.737 34.4835L166.311 37.4261C170.876 36.8824 173.047 35.4111 174.866 30.6454L180.995 14.8447H176.686L172.089 28.5343L166.886 14.8447H162.568H162.513H146.192V18.2032H152.129V36.9464H156.375V18.2032H162.121ZM198.439 36.7057L192.027 25.016L197.932 14.8447H193.431L189.537 22.4891L185.802 14.8447H181.109L186.983 25.1759L180.599 36.9464H185.1L189.473 27.8947L193.878 36.9464H198.364H198.571H202.737L204.11 31.8287H211.42L212.793 36.9464H217.262L210.43 14.8447H205.227L198.439 36.7057ZM204.94 28.6302H210.59L207.749 18.0753L204.94 28.6302ZM222.657 8.44775C222.912 11.1025 224.827 12.8297 227.828 12.8297C230.829 12.8297 232.808 11.1025 233.063 8.44775L230.637 8C230.254 9.34338 229.296 9.88708 227.828 9.88708C226.36 9.88708 225.466 9.34338 225.051 8L222.657 8.44775ZM236 36.9464V14.8447H230.924L223.295 32.5964C223.582 30.5814 223.902 28.3424 223.902 24.3444V14.8447H219.72V36.9464H224.923L232.425 19.1947C232.169 20.9858 231.818 23.8645 231.818 27.5428V36.9464H236Z" fill="white" fillOpacity="0.7"/>
          </svg>
          )
      setBgImage('https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/bw%20(3).png?alt=media&token=a57cda8e-e75c-4cc6-98fb-f04bdfe5833a');
    }else if (url.startsWith('/humanity/')) {
      setSvg(
        <svg xmlns="http://www.w3.org/2000/svg" width="227" height="50" viewBox="0 0 227 50" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M227 0H0V50H227V0ZM100.57 8.44775C100.825 11.1025 102.738 12.8296 105.735 12.8296C108.732 12.8296 110.709 11.1025 110.964 8.44775L108.541 8C108.158 9.34326 107.202 9.88721 105.735 9.88721C104.269 9.88721 103.376 9.34326 102.961 8L100.57 8.44775ZM113.897 36.9463V14.8447H108.828L101.208 32.5962C101.495 30.5815 101.813 28.3423 101.813 24.3442V14.8447H97.6367V36.9463H102.834L110.327 19.1948C110.071 20.9858 109.721 23.8647 109.721 27.543V36.9463H113.897ZM27.4141 25.0161L33.9502 36.9463H29.2637L24.8638 27.8945L20.4956 36.9463H16L22.3765 25.1758L16.5103 14.8447H21.1968L24.9272 22.4893L28.8169 14.8447H33.3125L27.4141 25.0161ZM52.2681 14.8447L45.1899 28.5664V36.9463H40.9175V28.5981L33.8394 14.8447H38.4946L43.1494 25.1118L47.8042 14.8447H52.2681ZM66.8457 27.063V36.9463H71.0859V14.8447H66.8457V23.7046H59.0024V14.8447H54.7939V36.9463H59.0024V27.063H66.8457ZM92.4761 14.8447V36.9463H88.2993V27.543C88.2993 23.8647 88.6499 20.9858 88.9048 19.1948L81.4121 36.9463H76.2153V14.8447H80.3921V24.3442C80.3921 28.3423 80.0732 30.5815 79.7861 32.5962L87.4062 14.8447H92.4761ZM139.081 36.9463V27.063H131.238V36.9463H127.029V14.8447H131.238V23.7046H139.081V14.8447H143.322V36.9463H139.081ZM166.529 25.8794C166.529 18.4912 162.798 14.3652 156.9 14.3652C151.001 14.3652 147.239 18.6509 147.239 25.9116C147.239 33.3003 151.001 37.4263 156.9 37.4263C162.798 37.4263 166.529 33.1724 166.529 25.8794ZM151.607 24.4082C151.926 19.5464 153.903 17.5957 156.9 17.5957C159.929 17.5957 161.874 19.5786 162.193 24.4082H151.607ZM162.193 27.0312C161.938 32.1484 159.961 34.1958 156.9 34.1958C153.903 34.1958 151.831 32.1484 151.576 27.0312H162.193ZM178.944 14.3652C184.843 14.3652 188.573 18.4912 188.573 25.8794C188.573 33.1724 184.843 37.4263 178.944 37.4263C173.046 37.4263 169.284 33.3003 169.284 25.9116C169.284 18.6509 173.046 14.3652 178.944 14.3652ZM178.944 17.5957C175.947 17.5957 173.971 19.5464 173.652 24.4082H184.237C183.918 19.5786 181.973 17.5957 178.944 17.5957ZM178.944 34.1958C182.005 34.1958 183.982 32.1484 184.237 27.0312H173.62C173.875 32.1484 175.947 34.1958 178.944 34.1958ZM211 33.6201H208.449V14.8447H204.209V33.5879H196.748V14.8447H192.54V36.9463H207.397L207.939 42H211V33.6201Z" fill="white" fillOpacity="0.7"/>
        </svg>
      )
      setBgImage('https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/hunii-nuuts-transformed-bw%20(2).png?alt=media&token=51971a5f-53ff-43d6-827e-f739d58515ff');
    }else {
      setBgImage('default-image-url');
    }
  }, [location.pathname]);

  return (
    <>
      {location.pathname !== '/' ? (
        <nav className="flex bg-scroll w-full bg-no-repeat bg-cover h-full w-full md:h-[350px] px-[20px] xl:h-[450px]"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize:'100% 100%'
        }}
      >
        <div className='mt-[210px] mb-[20px] md:mt-[250px] xl:mt-[350px] md:ml-[90px] animate-fade-left'>
          {svg}
        </div>
      </nav>
      ):(
        <div className=''>
          <ImageCarousel images={images}/>
        </div>
      )}
    </>
  )
}

export default Navbar;