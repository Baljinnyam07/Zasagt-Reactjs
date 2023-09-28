import React from 'react'
import { ProjectCarousel } from './Carousel';
import AppContainer from './AppContainer';
const jsonItems = [
  {
    "id":1,
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-10 w-10 sm:h-[46px] xl:h-[46px] sm:w-[56px] xl:w-[56px]\" width=\"\" height=\"\" viewBox=\"0 0 56 56\" fill=\"none\">\n<path d=\"M23.3863 20.2664H32.6136C32.8788 20.2664 33.0909 20.057 33.0909 19.7953V17.8586C33.0909 17.5969 32.8788 17.3875 32.6136 17.3875H30.3068C30.0947 16.3407 29.1401 15.5555 28 15.5555C26.8598 15.5555 25.9318 16.3407 25.6932 17.3875H23.3863C23.1212 17.3875 22.9091 17.5969 22.9091 17.8586V19.7953C22.9091 20.057 23.1212 20.2664 23.3863 20.2664Z\" fill=\"#D0A616\"/>\n<path d=\"M28 28.301C26.5947 28.301 25.4545 29.4263 25.4545 30.8134C25.4545 32.2005 26.5947 33.3259 28 33.3259C29.4053 33.3259 30.5455 32.2005 30.5455 30.8134C30.5455 29.4263 29.4053 28.301 28 28.301Z\" fill=\"#D0A616\"/>\n<path d=\"M36.697 18.9055H34.0455V19.8215C34.0455 20.6066 33.4091 21.2347 32.6136 21.2347H23.3864C22.5909 21.2347 21.9545 20.6066 21.9545 19.8215V18.9055H19.303C18.9583 18.9055 18.6667 19.1933 18.6667 19.5336V39.8163C18.6667 40.1565 18.9583 40.4444 19.303 40.4444H36.697C37.0417 40.4444 37.3333 40.1565 37.3333 39.8163V19.5074C37.3333 19.1672 37.0417 18.9055 36.697 18.9055ZM33.6742 31.52C33.6742 31.7294 33.5152 31.9126 33.303 31.9388L32.1629 32.0958C32.0303 32.4098 32.0038 32.4884 31.8712 32.8024L32.5606 33.7184C32.6932 33.9016 32.6667 34.1371 32.5076 34.268L31.5 35.2625C31.3409 35.4195 31.1023 35.4195 30.9432 35.3148L30.0151 34.6344C29.697 34.7653 29.6174 34.7914 29.2992 34.9223L29.1401 36.0476C29.1136 36.257 28.928 36.414 28.7159 36.414H27.2841C27.072 36.414 26.8864 36.257 26.8598 36.0476L26.7008 34.9223C26.3826 34.7914 26.303 34.7653 25.9848 34.6344L25.0568 35.3148C24.8712 35.4457 24.6326 35.4457 24.5 35.2625L23.4924 34.2942C23.3333 34.1371 23.3333 33.9016 23.4394 33.7446L24.1288 32.8286C23.9962 32.5145 23.9697 32.436 23.8371 32.122L22.697 31.9388C22.4848 31.9126 22.3258 31.7294 22.3258 31.52V30.1068C22.3258 29.8974 22.4848 29.7142 22.697 29.688L23.8371 29.531C23.9697 29.2169 23.9962 29.1384 24.1288 28.8244L23.4394 27.9084C23.3068 27.7252 23.3333 27.4896 23.4924 27.3588L24.5 26.3643C24.6591 26.2072 24.8977 26.2072 25.0568 26.3119L25.9848 26.9924C26.303 26.8615 26.3826 26.8354 26.7008 26.7045L26.8598 25.5791C26.8864 25.3698 27.072 25.2127 27.2841 25.2127H28.7159C28.928 25.2127 29.1136 25.3698 29.1401 25.5791L29.2992 26.7045C29.6174 26.8354 29.697 26.8615 30.0151 26.9924L30.9432 26.3119C31.1288 26.1811 31.3674 26.2072 31.5 26.3643L32.5076 27.3588C32.6667 27.5158 32.6667 27.7514 32.5606 27.9084L31.8712 28.8244C32.0038 29.1384 32.0303 29.2169 32.1629 29.531L33.303 29.688C33.5152 29.7142 33.6742 29.8974 33.6742 30.1068V31.52Z\" fill=\"#D0A616\"/>\n<rect x=\"0.25\" y=\"0.25\" width=\"55.5\" height=\"55.5\" rx=\"27.75\" stroke=\"#23356B\" stroke-width=\"0.5\"/>\n</svg>",
    "title": "Нийт хэрэгжүүлсэн төсөл",
    "number": "3"
  },
  {
    "id":2,
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-10 w-10 sm:h-[46px] xl:h-[56px] sm:w-[46px] xl:w-[56px]\" width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\">\n<path fill-rule=\"evenodd\" clipRule=\"evenodd\" d=\"M23.9167 33.1667H16.8333V21.8333H26.75L23.9167 33.1667ZM39.5 23.25V19H14V36H39.5V31.75H42.3333V23.25H39.5Z\" fill=\"#D0A616\"/>\n<rect x=\"0.25\" y=\"0.25\" width=\"55.5\" height=\"55.5\" rx=\"27.75\" stroke=\"#23356B\" stroke-width=\"0.5\"/>\n</svg>",
    "title": "Техникийн нийт хүчин чадал",
    "number": "10.000.000 m3"
  },
  {
    "id":3,
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-10 w-10 sm:h-[46px] xl:h-[56px] sm:w-[46px] xl:w-[56px]\" width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\">\n<path d=\"M37.1488 20.5325H42.0579V23.7276H37.1488V20.5325ZM16.0248 23.8019V20.5325H20.0413V21.5728V23.7276H16.0248V23.8019ZM13.0496 20.5325H14.5372V23.7276H13.0496V20.5325ZM10 22.1672C10 21.7214 10.1488 21.3498 10.4463 21.0526C10.7438 20.7554 11.1157 20.5325 11.562 20.5325V23.7276C10.6694 23.8019 10 23.0588 10 22.1672ZM33.7273 36.1362C33.7273 36.2105 33.7273 36.2105 33.7273 36.2848V40H23.0165V36.2848C23.0165 36.1362 22.9421 35.9876 22.8678 35.839L19 30.4149C18.1074 29.226 17.6612 27.7399 17.6612 26.2539V25.2879H20.0413V26.9969C20.0413 27.4427 20.3388 27.7399 20.7851 27.7399C21.2314 27.7399 21.5289 27.4427 21.5289 26.9969V24.0991V21.6471V19.3437C21.5289 18.6749 22.0496 18.1548 22.719 18.1548C23.0165 18.1548 23.314 18.3034 23.6116 18.5263C23.8347 18.7492 23.9835 19.0464 23.9835 19.3437V21.87V22.3901C23.9835 22.8359 24.281 23.1331 24.7273 23.1331C25.1736 23.1331 25.4711 22.8359 25.4711 22.3901V21.87V19.3437V17.1889C25.4711 16.5201 25.9917 16 26.6612 16C26.9587 16 27.2562 16.1486 27.5537 16.3715C27.7769 16.5944 27.9256 16.8916 27.9256 17.1889V19.3437V21.87V22.3901C27.9256 22.8359 28.2231 23.1331 28.6694 23.1331C29.1157 23.1331 29.4132 22.8359 29.4132 22.3901V21.87V19.3437C29.4132 18.6749 29.9339 18.1548 30.6033 18.1548C30.9008 18.1548 31.1983 18.3034 31.4959 18.5263C31.719 18.7492 31.8678 19.0464 31.8678 19.3437V20.4582V21.87V22.3901C31.8678 22.8359 32.1653 23.1331 32.6116 23.1331C33.0579 23.1331 33.3554 22.8359 33.3554 22.3901V21.87V20.4582C33.3554 20.3096 33.3554 20.2353 33.4298 20.0867C33.5785 19.5666 34.0248 19.2693 34.5455 19.2693C34.843 19.2693 35.1405 19.418 35.438 19.6409C35.5868 19.7895 35.6612 19.9381 35.7355 20.161C35.7355 20.2353 35.8099 20.3839 35.8099 20.5325V24.1734L33.7273 36.1362ZM43.5455 23.356V21.0526L46 22.2415L43.5455 23.356Z\" fill=\"#D0A616\"/>\n<rect x=\"0.25\" y=\"0.25\" width=\"55.5\" height=\"55.5\" rx=\"27.75\" stroke=\"#23356B\" stroke-width=\"0.5\"/>\n</svg>",
    "title": "Үүсгэн байгуулагдсанаас хойш гарсан осол аваар, хөдөлмөрийн чадвараа алдсан тохиолдол",
    "number": "0"
  },
  {
    "id":4,
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-10 w-10 sm:h-[46px] xl:h-[56px] sm:w-[46px] xl:w-[56px]\" width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\">\n<path d=\"M22.4 23.416H21.2C21.1463 23.4159 21.0933 23.405 21.044 23.384C21.0244 23.3734 21.0057 23.3614 20.988 23.348C20.9637 23.3344 20.9409 23.3183 20.92 23.3C20.904 23.2833 20.8906 23.2645 20.88 23.244C20.8617 23.2216 20.8456 23.1975 20.832 23.172C20.832 23.152 20.832 23.128 20.832 23.104C20.8297 23.076 20.8297 23.048 20.832 23.02C20.7813 22.6286 20.8877 22.2331 21.128 21.92C21.2747 21.7752 21.4639 21.6813 21.668 21.652C21.728 21.524 21.808 21.332 21.88 21.164C22.348 20.048 22.7439 19.164 23.176 18.908C23.4707 18.7256 23.7079 18.4635 23.86 18.152C24.064 17.6871 24.3663 17.2719 24.746 16.9349C25.1258 16.598 25.5741 16.3472 26.06 16.2C26.4318 16.0932 26.8139 16.0262 27.2 16C27.1977 16.0373 27.1977 16.0747 27.2 16.112V17.64C26.7143 17.7391 26.2828 18.015 25.9891 18.4142C25.6953 18.8134 25.5603 19.3075 25.6101 19.8006C25.6599 20.2937 25.891 20.7508 26.2587 21.0832C26.6263 21.4156 27.1043 21.5996 27.6 21.5996C28.0956 21.5996 28.5736 21.4156 28.9412 21.0832C29.3089 20.7508 29.54 20.2937 29.5898 19.8006C29.6396 19.3075 29.5046 18.8134 29.2108 18.4142C28.9171 18.015 28.4856 17.7391 28 17.64V16.108C28.002 16.072 28.002 16.036 28 16C28.4063 16.0232 28.8088 16.0916 29.2 16.204C29.6858 16.3512 30.1341 16.602 30.5139 16.9389C30.8936 17.2759 31.1959 17.6911 31.4 18.156C31.552 18.4675 31.7892 18.7296 32.084 18.912C32.516 19.176 32.912 20.052 33.38 21.168C33.452 21.336 33.532 21.528 33.592 21.656C33.7962 21.6845 33.9857 21.7785 34.132 21.924C34.3613 22.2402 34.4575 22.6337 34.4 23.02C34.4022 23.0399 34.4022 23.0601 34.4 23.08C34.3846 23.1747 34.3358 23.2606 34.2624 23.3223C34.189 23.384 34.0958 23.4172 34 23.416H32.8C32.7562 24.4854 32.3835 25.5152 31.7328 26.365C31.0821 27.2147 30.185 27.843 29.164 28.164C30.0269 28.3481 30.8512 28.6811 31.6 29.148V40H23.5999V29.148C24.3523 28.6798 25.1808 28.3468 26.0479 28.164C25.0247 27.845 24.125 27.2177 23.472 26.3677C22.819 25.5178 22.4446 24.4869 22.4 23.416ZM32 23.416H23.2C23.2819 24.5237 23.7798 25.5594 24.5937 26.3153C25.4076 27.0712 26.4772 27.4913 27.588 27.4913C28.6987 27.4913 29.7683 27.0712 30.5822 26.3153C31.3961 25.5594 31.894 24.5237 31.976 23.416H32ZM27.6 18.4C27.3626 18.4 27.1306 18.4704 26.9333 18.6022C26.7359 18.7341 26.5821 18.9215 26.4913 19.1408C26.4005 19.3601 26.3767 19.6013 26.423 19.8341C26.4693 20.0669 26.5836 20.2807 26.7514 20.4485C26.9192 20.6164 27.1331 20.7306 27.3658 20.7769C27.5986 20.8232 27.8399 20.7995 28.0592 20.7087C28.2784 20.6178 28.4659 20.464 28.5977 20.2667C28.7296 20.0693 28.8 19.8373 28.8 19.6C28.8 19.2817 28.6735 18.9765 28.4485 18.7515C28.2234 18.5264 27.9182 18.4 27.6 18.4ZM20 35.6V39.6C20 39.7061 20.0421 39.8078 20.1171 39.8828C20.1921 39.9579 20.2939 40 20.4 40H22.8V29.712C21.9256 30.4242 21.2208 31.3221 20.7365 32.3405C20.2522 33.3589 20.0006 34.4723 20 35.6ZM32.4 29.716V40H34.8C34.906 40 35.0078 39.9579 35.0828 39.8828C35.1578 39.8078 35.2 39.7061 35.2 39.6V35.6C35.2004 34.4727 34.9493 33.3595 34.4649 32.3416C33.9805 31.3237 33.275 30.4267 32.4 29.716Z\" fill=\"#D0A616\"/>\n<rect x=\"0.25\" y=\"0.25\" width=\"55.5\" height=\"55.5\" rx=\"27.75\" stroke=\"#23356B\" stroke-width=\"0.5\"/></svg>",
    "title":"Нийт ажиллаж буй оператор, ажилтнуудын тоо",
    "number":"250+"
  },
  {
    "id":5,
    "svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-10 w-10 sm:h-[46px] xl:h-[56px] sm:w-[46px] xl:w-[56px]\" width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\">\n<path d=\"M28 16C21.3832 16 16 21.3832 16 28C16 34.6168 21.3832 40 28 40C34.6168 40 40 34.6168 40 28C40 21.3832 34.6168 16 28 16ZM22.611 22.611C23.4076 21.8145 24.6993 21.8145 25.4961 22.611C26.2929 23.4076 26.2926 24.6993 25.4961 25.4961C24.6995 26.2929 23.4078 26.2926 22.611 25.4961C21.8142 24.6995 21.8145 23.4078 22.611 22.611ZM23.729 33.6287L22.3713 32.2713L32.2713 22.3713L33.6287 23.729L23.729 33.6287ZM33.389 33.389C32.5924 34.1855 31.3007 34.1855 30.5039 33.389C29.7071 32.5924 29.7074 31.3007 30.5039 30.5039C31.3005 29.7071 32.5922 29.7074 33.389 30.5039C34.1858 31.3005 34.1855 32.5922 33.389 33.389Z\" fill=\"#D0A616\"/>\n<rect x=\"0.25\" y=\"0.25\" width=\"55.5\" height=\"55.5\" rx=\"27.75\" stroke=\"#23356B\" stroke-width=\"0.5\"/></svg>",
    "title":"Тухайн орон нутгаас ажиллаж буй ажилчдын нийт ажилтнуудад эзлэх хувь",
    "number":"41%"
  },
  {
    "id":6,
    "svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-10 w-10 sm:h-[46px] xl:h-[56px] sm:w-[46px] xl:w-[56px]\" width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\">\n<path d=\"M33.871 34.2223C33.871 34.4558 33.8243 34.687 33.7336 34.9027C33.6428 35.1184 33.5098 35.3144 33.342 35.4795C33.1742 35.6446 32.9751 35.7755 32.7559 35.8649C32.5367 35.9542 32.3018 36.0001 32.0645 36.0001H23.9355C23.4566 35.9994 22.9975 35.8119 22.6588 35.4787C22.3202 35.1454 22.1297 34.6936 22.129 34.2223H16.2581C15.4538 34.2235 14.6675 33.9883 14 33.5468V37.7778C14.0002 38.3671 14.2382 38.9322 14.6616 39.3489C15.085 39.7656 15.6593 39.9998 16.2581 40H39.7419C40.0385 40.0002 40.3323 39.9429 40.6064 39.8314C40.8805 39.7198 41.1295 39.5561 41.3392 39.3497C41.549 39.1433 41.7153 38.8982 41.8287 38.6285C41.942 38.3588 42.0003 38.0697 42 37.7778V33.5468C41.3325 33.9882 40.5462 34.2235 39.7419 34.2223H33.871Z\" fill=\"#D0A616\"/>\n<path d=\"M32.0668 30.6664H23.9377V34.2219H32.0668V30.6664Z\" fill=\"#D0A616\"/>\n<path d=\"M39.7419 20.4449H33.8729L33.873 20.4443V18.6686C33.8722 17.9611 33.5863 17.2828 33.078 16.7825C32.5696 16.2822 31.8804 16.0008 31.1615 16H24.8427C24.1237 16.0008 23.4345 16.2822 22.9261 16.7825C22.4177 17.2827 22.1318 17.9611 22.131 18.6686V20.4443L22.1311 20.4449H16.2581C15.6593 20.4451 15.085 20.6793 14.6616 21.096C14.2382 21.5127 14.0002 22.0778 14 22.6671V30.2224C14.0002 30.8117 14.2382 31.3768 14.6616 31.7935C15.085 32.2102 15.6593 32.4444 16.2581 32.4446H22.129V30.6669C22.1297 30.1956 22.3202 29.7438 22.6588 29.4105C22.9975 29.0773 23.4566 28.8898 23.9355 28.8891H32.0645C32.3018 28.8891 32.5367 28.935 32.7559 29.0243C32.9751 29.1137 33.1743 29.2446 33.342 29.4097C33.5098 29.5748 33.6428 29.7708 33.7336 29.9865C33.8244 30.2022 33.871 30.4334 33.871 30.6669V32.4446H39.7419C40.0385 32.4449 40.3323 32.3876 40.6064 32.276C40.8805 32.1644 41.1295 32.0007 41.3392 31.7943C41.549 31.5879 41.7153 31.3429 41.8287 31.0731C41.942 30.8034 42.0003 30.5143 42 30.2224V22.6671C42.0003 22.3752 41.9421 22.0861 41.8287 21.8164C41.7153 21.5466 41.549 21.3016 41.3392 21.0951C41.1295 20.8887 40.8805 20.7251 40.6064 20.6135C40.3323 20.5019 40.0385 20.4446 39.7419 20.4449ZM23.9374 20.4449L23.9375 20.4443V18.6686C23.9378 18.4324 24.0333 18.206 24.2029 18.039C24.3726 17.872 24.6027 17.778 24.8427 17.7777H31.1615C31.4015 17.778 31.6315 17.872 31.8012 18.039C31.9708 18.206 32.0662 18.4324 32.0665 18.6686V20.4443L32.0666 20.4449H23.9374Z\" fill=\"#D0A616\"/>\n<rect x=\"0.25\" y=\"0.25\" width=\"55.5\" height=\"55.5\" rx=\"27.75\" stroke=\"#23356B\" stroke-width=\"0.5\"/></svg>",
    "title":"Инженер техникийн ажилтнуудын ажлын туршлага",
    "number":"10 жил"
  }
]

const jsonProject =[
  {
    proTitle:'Овоот толгой төсөл',
    image: 'https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/project1.png?alt=media&token=863a2f07-77b5-47bd-8d14-11ccf8f56c21',
    caption1: 'Саусгоби Ресурс Лимитед (Саусгоби) нь Торонто болон Хонконгийн Хөрөнгийн Биржид (TSX: SGQ, HK: 1878) бүртгэлтэй олон нийтэд нээлттэй нүүрс нийлүүлэгч компани бөгөөд Саусгоби компани нь логистикийн дэд бүтэцтэй, арилжааны чадамж бүхий стратегийн ач холбогдолтой нүүрсний орд эзэмшдэг болно. Тус орд нь Өмнөговь аймгийн Гурван тэс суманд орших бөгөөд 9,283 га бүхий талбайд 2037 он хүртэл олборлолт хийх ашиглалтын тусгай зөвшөөрөлтэй.',
    caption2:' Манай компани 2022 оноос эхлэн Саусгоби Сэндс компанитай хамтран ажиллаж эхэлсэн бөгөөд Овоот Толгой дахь Нармандах болон Наржаргах уурхайд хөрс хуулалт, нүүрс олборлолтын ажлыг хийж гүйцэтгэж байна.'
  },
  {
    proTitle:'цанхийн баруун уурхайн нүүрс ачилт',
    image: 'https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/project2.png?alt=media&token=4fdd57b4-9ad2-4025-a88e-652ef37957f8',
    caption1: 'Монголын өмнөд хэсэгт орших Өмнөговь аймагт оршдог дэлхийн хамгийн том ашиглагдаагүй коксжих болон эрчим хүчний нүүрсний ордуудын нэг бөгөөд нийт 2.9 тэрбум тонн нөөцтэй ба үүний дөрөвний нэг нь сайн чанарын коксжих нүүрс бүхий ордтой стратегийн гол орд юм.',
    caption2:''
  },
]

const Home =()=>{
  return (
    <>
    <div className='bg-custom-rgba'>
      <AppContainer>
        <div className='pt-[24px] xl:pt-[79px] px-[20px] xl:px-0'>
            <div className='mb-[32px] xl:mb-[46px]'>
              <h1 className='mb-[24px] text-[18px] md:text-[32px] font-[600] uppercase text-[#23356B]'>Компанийн тухай</h1>
              <div className='text-justify text-[14px] md:text-[16px] leading-[24px] text-[#23356B]'>
              Засагт Хаан ХХК нь 2008 онд уул уурхайн хайгуул, олборлолтын чиглэлээр үйл ажиллагаагаа эхэлсэн бөгөөд 2011 оноос эхлэн орон сууцны болон үйлдвэрийн барилга байгууламжийн угсралт,
              хүнд машин механизмын түрээсийн чиглэлээр үйл ажиллагаагаа өргөтгөсөн өдгөө дараах чиглэлээр үйл ажиллагаа явуулж буй оператор компани юм.
              </div>
            </div>
        </div>
      </AppContainer>
      <div className='border-y'>
        <div className='grid grid-cols-2 xl:grid-cols-3 text-[#23356B] divide-x'>
              {jsonItems
              .map((items,index)=>(
                <div key={index} className={`flex items-start ${items.id === 1 ? 'pl-[180px]' : ''} ${items.id === 4 ? 'pl-[180px] border-t' : ''} ${items.id === 3 ? 'pr-[120px]' : ''} ${items.id === 6 ? 'pr-[180px] border-t' : ''} ${items.id === 5 ? 'border-t' : ''}`}>
                  <div className='flex px-[17px] py-[40px]'>
                  <div className='mr-[16px]' dangerouslySetInnerHTML={{ __html: items.svg }}/>
                  <div>
                    <h1 className='text-[16px] sm:text-[24px] xl:text-[32px] font-[700]'>{items.number}</h1>
                    <div className='text-[8px] sm:text-[12px] xl:text-[16px] text-[#23356B] w-full'>{items.title}</div>
                  </div>
                </div>
              </div>
              ))}
        </div>
      </div>
    </div>
    <div className=' animate-fade-up animate-once animate-duration-500 animate-delay-100 animate-ease-linear animate-normal mb-[120px]'>
        <ProjectCarousel items={jsonProject}/>
      </div>
      {/* <AppContainer>
      <div className='mt-[80px] xl:mt-[200px]'>
      <h1 className='uppercase text-[#23356B] px-[20px] lg:px-0 text-[18px] md:text-[32px] font-[600]'>тоног төхөөрөмж түрээс</h1>
      <div className=''>
        <div className='grid sm:grid-cols-2 px-[20px] lg:px-0 sm:gap-[14px] lg:grid-cols-3 justify-center gap-[24px] w-full pt-[32px] pb-[40px]'>
          <a href="/mechanical/openings" className='relative'>
            <div className='bg-[#454655] bg-opacity-40 hover:bg-opacity-0 h-[266px] w-full absolute transition duration-700 ease-in-out delay-150'></div>
            <img className='w-full h-[266px] backdrop-saturate-10 transition ease-in-out delay-150' src="https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/pexels-ivan-129544.png?alt=media&token=15560a8c-9c7b-4672-a2be-2364fb2a2530" alt="mechanic images" />
          </a>
          <a href="/mechanical/openings" className='relative'>
          <div className='bg-[#454655] bg-opacity-40 hover:bg-opacity-0 h-[266px] w-full absolute transition duration-700 ease-in-out delay-150'></div>
          <img className='w-full h-[266px] transition ease-in-out delay-150' src="https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/pexels-manzil-joshi-3998410.png?alt=media&token=2bfe4ef8-b1b2-4a4a-bc39-960387649313" alt="mechanic images" />
          </a>
          <a href="/mechanical/openings" className='relative'>
          <div className='bg-[#454655] bg-opacity-40 hover:bg-opacity-0 h-[266px] w-full absolute transition duration-700 ease-in-out delay-150'></div>
          <img className='w-full h-[266px] transition ease-in-out delay-150' src="https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/pexels-de-lemster-krant-13997579.png?alt=media&token=8f638526-7bee-4dda-b5fd-39be64517e32" alt="mechanic images" />
          </a>
        </div>
        <div className='text-[16px] mb-[120px] font-[400] text-[#fff] flex justify-center font-400'>
        <a href="/mechanical/mining">
          <div className='border cursor-pointer py-[7px] px-[24px] rounded-[8px] bg-[#D0A616] hover:opacity-70'>
          ДЭЛГЭРЭНГҮЙ
          </div>
          </a>
        </div>
      </div>
      </div>
      </AppContainer> */}
    </>
  )
}

export default Home