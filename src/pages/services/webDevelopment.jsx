import { useEffect, useRef, useState } from "react"
import Banner from "../../components/banner"
import HeadingForDynamic from "../../components/headingForDynamic"

const WebsiteDevelopment = ()=>{
    const targetRef =  useRef()
    const [ isIntersecting, setIntersecting ] = useState(false)
    useEffect(() => {
        if (!targetRef.current) return;
    
        const observer = new IntersectionObserver(
            ([entry]) => {
            setIntersecting(entry.isIntersecting);
            },
        //   { rootMargin }
        );
    
        observer.observe(targetRef.current);
    
        return () => {
            if (targetRef.current) observer.unobserve(targetRef.current);
        };
        }, [targetRef ]);
    const data = [{
        name : "Reactjs",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
        <path d="M44.4999 52.4266C48.8776 52.4266 52.4265 48.8777 52.4265 44.5C52.4265 40.1223 48.8776 36.5734 44.4999 36.5734C40.1222 36.5734 36.5734 40.1223 36.5734 44.5C36.5734 48.8777 40.1222 52.4266 44.4999 52.4266Z" fill="#61DAFB"/>
        <path d="M74.607 31.4281C73.0773 30.8719 71.4781 30.3156 69.8093 29.8289C70.2265 28.1601 70.5742 26.4914 70.8523 24.8922C72.3125 15.714 70.7132 9.24764 66.2632 6.74452C64.9421 5.97967 63.482 5.63202 61.8132 5.63202C56.946 5.63202 50.7578 9.24764 44.5 15.2969C38.2421 9.24764 32.0539 5.63202 27.1867 5.63202C25.5179 5.63202 24.0578 5.97967 22.7367 6.74452C18.2867 9.31717 16.6875 15.7836 18.1476 24.8922C18.4257 26.4914 18.7734 28.1601 19.1906 29.8289C17.5218 30.3156 15.9226 30.8023 14.3929 31.4281C5.70151 34.7656 0.973389 39.3547 0.973389 44.5C0.973389 49.6453 5.77105 54.2344 14.3929 57.5719C15.9226 58.1281 17.5218 58.6844 19.1906 59.1711C18.7734 60.8398 18.4257 62.5086 18.1476 64.1078C16.6875 73.2859 18.2867 79.7523 22.7367 82.2555C24.0578 83.0203 25.5179 83.368 27.1867 83.368C32.1234 83.368 38.3117 79.7523 44.5 73.7031C50.7578 79.7523 56.946 83.368 61.8132 83.368C63.482 83.368 64.9421 83.0203 66.2632 82.2555C70.7132 79.6828 72.3125 73.2164 70.8523 64.1078C70.5742 62.5086 70.2265 60.8398 69.8093 59.1711C71.4781 58.6844 73.0773 58.1976 74.607 57.5719C83.2984 54.2344 88.0265 49.6453 88.0265 44.5C88.0265 39.3547 83.2984 34.7656 74.607 31.4281ZM64.3164 10.2211C67.1671 11.8898 68.1406 17.0351 66.9585 24.3359C66.75 25.7961 66.4023 27.3258 65.9851 28.925C62.3695 28.0906 58.5453 27.5344 54.5125 27.1867C52.1484 23.8492 49.7148 20.8594 47.2812 18.1476C52.4265 13.0719 57.6414 9.5953 61.8828 9.5953C62.7867 9.5953 63.621 9.80389 64.3164 10.2211ZM56.5289 51.4531C55.2773 53.6781 53.8171 55.9031 52.2874 58.1281C49.7148 58.3367 47.1421 58.4062 44.5 58.4062C41.7882 58.4062 39.2156 58.3367 36.7124 58.1281C35.1828 55.9031 33.7921 53.6781 32.5406 51.4531C31.2195 49.1586 29.9679 46.7945 28.8554 44.5C29.9679 42.2055 31.2195 39.8414 32.5406 37.5469C33.7921 35.3219 35.2523 33.0969 36.782 30.8719C39.3546 30.6633 41.9273 30.5937 44.5695 30.5937C47.2812 30.5937 49.8539 30.6633 52.357 30.8719C53.8867 33.0969 55.2773 35.3219 56.5289 37.5469C57.85 39.8414 59.1015 42.2055 60.214 44.5C59.032 46.7945 57.85 49.0891 56.5289 51.4531ZM62.2999 49.1586C63.3429 51.5922 64.1773 53.9562 64.9421 56.3203C62.5781 56.8766 60.0749 57.2937 57.4328 57.6414C58.2671 56.3203 59.171 54.9297 59.9359 53.4695C60.7703 52.0094 61.5351 50.5492 62.2999 49.1586ZM44.5 68.0016C42.8312 66.1937 41.232 64.2469 39.7023 62.2305C41.3015 62.3 42.9007 62.3695 44.5 62.3695C46.0992 62.3695 47.6984 62.3 49.2976 62.2305C47.7679 64.2469 46.1687 66.1937 44.5 68.0016ZM31.5671 57.5719C28.925 57.2242 26.4218 56.807 24.0578 56.2508C24.8226 53.9562 25.657 51.5226 26.7 49.0891C27.4648 50.4797 28.2296 51.9398 29.064 53.3305C29.8984 54.8601 30.7328 56.1812 31.5671 57.5719ZM26.7 39.8414C25.657 37.4078 24.8226 35.0437 24.0578 32.6797C26.4218 32.1234 28.925 31.7062 31.5671 31.3586C30.7328 32.6797 29.8289 34.0703 29.064 35.5305C28.2296 36.9906 27.4648 38.4508 26.7 39.8414ZM44.5 20.9984C46.1687 22.8062 47.7679 24.7531 49.2976 26.7695C47.6984 26.7 46.0992 26.6305 44.5 26.6305C42.9007 26.6305 41.3015 26.7 39.7023 26.7695C41.232 24.7531 42.8312 22.8062 44.5 20.9984ZM59.9359 35.6L57.4328 31.4281C60.0749 31.7758 62.5781 32.193 64.9421 32.7492C64.1773 35.0437 63.3429 37.4773 62.2999 39.9109C61.5351 38.4508 60.7703 36.9906 59.9359 35.6ZM22.0414 24.3359C20.8593 17.0351 21.8328 11.8898 24.6835 10.2211C25.3789 9.80389 26.2132 9.5953 27.1171 9.5953C31.289 9.5953 36.5039 13.0023 41.7187 18.1476C39.2851 20.7898 36.8515 23.8492 34.4874 27.1867C30.4546 27.5344 26.6304 28.1601 23.0148 28.925C22.5976 27.3258 22.3195 25.7961 22.0414 24.3359ZM4.86714 44.5C4.86714 41.232 8.83042 37.7555 15.7835 35.1828C17.1742 34.6266 18.7039 34.1398 20.2335 33.7226C21.346 37.1992 22.7367 40.8844 24.4054 44.5695C22.7367 48.2547 21.2765 51.8703 20.2335 55.3469C10.6382 52.5656 4.86714 48.3937 4.86714 44.5ZM24.6835 78.7789C21.8328 77.1101 20.8593 71.9648 22.0414 64.6641C22.25 63.2039 22.5976 61.6742 23.0148 60.075C26.6304 60.9094 30.4546 61.4656 34.4874 61.8133C36.8515 65.1508 39.2851 68.1406 41.7187 70.8523C36.5734 75.9281 31.3585 79.4047 27.1171 79.4047C26.2132 79.4047 25.3789 79.1961 24.6835 78.7789ZM66.9585 64.6641C68.1406 71.9648 67.1671 77.1101 64.3164 78.7789C63.621 79.1961 62.7867 79.4047 61.8828 79.4047C57.7109 79.4047 52.496 75.9976 47.2812 70.8523C49.7148 68.2101 52.1484 65.1508 54.5125 61.8133C58.5453 61.4656 62.3695 60.8398 65.9851 60.075C66.4023 61.6742 66.6804 63.2039 66.9585 64.6641ZM73.2164 53.8172C71.8257 54.3734 70.296 54.8601 68.7664 55.2773C67.6539 51.8008 66.2632 48.1156 64.5945 44.4305C66.2632 40.7453 67.7234 37.1297 68.7664 33.6531C78.3617 36.4344 84.1328 40.6062 84.1328 44.5C84.1328 47.768 80.1 51.2445 73.2164 53.8172Z" fill="#61DAFB"/>
        </svg>
    },{
        name : "Nextjs",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
        <g clipPath="url(#clip0_4_16)">
        <path d="M67.1669 6.17228C37.7311 -11.1356 0.327585 10.0038 0.00213235 44.1318C-0.315672 77.4575 34.9525 98.9825 64.3221 84.3145L32.2556 37.136L32.2556 66.3386C32.2556 69.5742 26.064 69.5742 26.064 66.3386V27.1903C26.064 24.6219 30.8351 24.4111 32.1871 26.6438L68.7368 81.7987C96.1931 64.1139 95.8222 23.0212 67.1669 6.17228ZM63.0375 61.4389L56.8264 51.952V25.9801C56.8264 23.5582 63.0375 23.5582 63.0375 25.9801V61.4389Z" fill="#333030"/>
        </g>
        <defs>
        <clipPath id="clip0_4_16">
        <rect width="89" height="89" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    },{
        name : "NodeJs",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="65" height="74" viewBox="0 0 65 74" fill="none">
        <g clipPath="url(#clip0_33_4)">
        <path fillRule="evenodd" clipRule="evenodd" d="M40.8069 52.6122C29.0592 52.6122 26.5963 47.2417 26.5963 42.7327C26.5963 42.305 26.9422 41.9604 27.3716 41.9604H30.8422C31.2239 41.9604 31.5459 42.2396 31.6055 42.6139C32.1303 46.1368 33.6867 47.9131 40.795 47.9131C46.4541 47.9131 48.8573 46.6417 48.8573 43.6476C48.8573 41.9248 48.1716 40.6475 39.3817 39.792C32.0289 39.0673 27.4849 37.4573 27.4849 31.5938C27.4849 26.1996 32.0528 22.9856 39.7096 22.9856C48.3087 22.9856 52.5665 25.956 53.1032 32.3483C53.1211 32.5681 53.0436 32.782 52.8945 32.9424C52.7454 33.0968 52.5367 33.1919 52.322 33.1919H48.8395C48.4757 33.1919 48.1596 32.9364 48.0881 32.5919C47.2472 28.8908 45.2197 27.7026 39.6977 27.7026C33.5197 27.7026 32.8041 29.8472 32.8041 31.4512C32.8041 33.3998 33.6509 33.9701 41.9876 35.0691C50.2408 36.1622 54.1587 37.7009 54.1587 43.4813C54.1587 49.3091 49.2807 52.6478 40.7711 52.6478L40.8069 52.6122ZM32.5119 73.8801C31.528 73.8801 30.556 73.6246 29.6972 73.1316L20.7344 67.8443C19.3927 67.0958 20.0486 66.8344 20.4899 66.6799C22.2729 66.0561 22.6367 65.9195 24.545 64.8383C24.7477 64.7254 25.0101 64.767 25.2128 64.8858L32.1005 68.9552C32.3509 69.0918 32.7028 69.0918 32.9353 68.9552L59.7881 53.5152C60.0385 53.3726 60.1995 53.0875 60.1995 52.7904V21.9282C60.1995 21.6193 60.0385 21.346 59.7821 21.1915L32.9353 5.7634C32.6849 5.61488 32.3569 5.61488 32.1064 5.7634L5.27156 21.1915C5.00917 21.3401 4.84817 21.6252 4.84817 21.9223V52.7904C4.84817 53.0875 5.00917 53.3667 5.2656 53.5092L12.6183 57.7391C16.6078 59.7292 19.0528 57.3826 19.0528 55.0301V24.5599C19.0528 24.1263 19.3927 23.7877 19.8339 23.7877H23.233C23.6564 23.7877 24.0083 24.1203 24.0083 24.5599V55.042C24.0083 60.3471 21.1041 63.3887 16.0592 63.3887C14.5087 63.3887 13.2803 63.3887 9.86927 61.7134L2.81468 57.6678C1.07339 56.6638 0 54.7924 0 52.7904V21.9223C0 19.9143 1.07339 18.037 2.81468 17.0449L29.6913 1.59893C31.3908 0.642469 33.6509 0.642469 35.3385 1.59893L62.1853 17.0508C63.9206 18.0489 65 19.9143 65 21.9282V52.7964C65 54.7984 63.9206 56.6638 62.1853 57.6737L35.3385 73.1197C34.4798 73.6128 33.5018 73.8682 32.5119 73.8682V73.8801Z" fill="#689F63"/>
        </g>
        <defs>
        <clipPath id="clip0_33_4">
        <rect width="65" height="73" fill="white" transform="translate(0 0.879997)"/>
        </clipPath>
        </defs>
        </svg>
    },{
        name : "express",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="122" height="71" viewBox="0 0 122 71" fill="none">
        <g clipPath="url(#clip0_32_2)">
        <path d="M122 69.1586C117.562 70.2903 114.817 69.2082 112.355 65.4992L94.84 41.1919L92.3082 37.8261L71.8542 65.58C69.5173 68.9191 67.066 70.3711 62.7042 69.1899L88.8961 33.9216L64.5113 2.06408C68.7048 1.24627 71.6026 1.66206 74.1756 5.42982L92.342 30.04L110.642 5.56382C112.986 2.2247 115.507 0.956235 119.716 2.18615L110.261 14.7606L97.4514 31.4921C95.9261 33.4039 96.1356 34.7128 97.5392 36.5586L122 69.1586ZM0.0311101 33.3323L2.17313 22.7615C8.00627 1.84196 31.9107 -6.85097 48.3963 6.07506C58.0304 13.6776 60.4249 24.432 59.9482 36.4787H5.64282C4.82755 58.1628 20.3863 71.2495 40.2217 64.5731C47.1793 62.2289 51.2776 56.7631 53.3291 49.9261C54.3704 46.4998 56.0924 45.9637 59.3031 46.9431C57.6644 55.4947 53.9659 62.6383 46.15 67.1091C34.4727 73.8011 17.8032 71.6368 9.03565 62.3363C3.8119 56.9394 1.65432 50.1023 0.686252 42.7898C0.533446 41.581 0.228751 40.4301 0 39.2717C0.0201301 37.2929 0.0311101 35.3149 0.0311101 33.336V33.3323ZM5.74164 31.8794H54.816C54.4957 16.1998 44.7628 5.06268 31.4605 4.96814C16.8589 4.85341 6.37391 15.7253 5.74072 31.8794H5.74164Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_32_2">
        <rect width="122" height="71" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    },{
        name : "MongoDB",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="116" height="110" viewBox="0 0 116 110" fill="none">
        <path d="M60.2476 103.125L57.5252 102.269C57.5252 102.269 57.8877 89.2066 52.9033 88.2887C49.6408 84.6862 53.3854 -65.5084 65.3117 87.7766C63.0489 88.865 61.3175 90.7408 60.4796 93.0119C60.0305 96.366 59.9527 99.7555 60.2476 103.125Z" fill="url(#paint0_linear_4_39)"/>
        <path d="M61.7192 90.5059C68.9677 85.3317 74.5188 78.313 77.7272 70.2655C80.9357 62.2181 81.6698 53.4724 79.8442 45.045C74.5155 22.7528 61.8969 15.4241 60.5375 12.6259C59.3647 10.8836 58.3635 9.04247 57.5469 7.12595L58.551 69.2381C58.551 69.2381 56.4702 88.22 61.7192 90.5059Z" fill="url(#paint1_linear_4_39)"/>
        <path d="M56.1404 91.3309C56.1404 91.3309 33.9517 77 35.235 51.6484C35.3547 44.0057 37.2027 36.4762 40.654 29.5688C44.1054 22.6613 49.0799 16.5366 55.2414 11.6084C55.9614 11.0283 56.5335 10.3011 56.9146 9.48125C57.2957 8.66142 57.4759 7.77036 57.4417 6.875C58.8229 9.69375 58.5981 48.9603 58.7431 53.5528C59.305 71.4175 57.6955 87.9587 56.1404 91.3309Z" fill="url(#paint2_linear_4_39)"/>
        <defs>
        <linearGradient id="paint0_linear_4_39" x1="41.9473" y1="55.8673" x2="72.8791" y2="66.9364" gradientUnits="userSpaceOnUse">
        <stop offset="0.231" stopColor="#999875"/>
        <stop offset="0.563" stopColor="#9B9977"/>
        <stop offset="0.683" stopColor="#A09F7E"/>
        <stop offset="0.768" stopColor="#A9A889"/>
        <stop offset="0.837" stopColor="#B7B69A"/>
        <stop offset="0.896" stopColor="#C9C7B0"/>
        <stop offset="0.948" sstopColor="#DEDDCB"/>
        <stop offset="0.994" stopColor="#F8F6EB"/>
        <stop offset="1" stop-color="#FBF9EF"/>
        </linearGradient>
        <linearGradient id="paint1_linear_4_39" x1="53.4214" y1="6.68212" x2="65.892" y2="88.801" gradientUnits="userSpaceOnUse">
        <stop stopColor="#48A547"/>
        <stop offset="1" stopColor="#3F9143"/>
        </linearGradient>
        <linearGradient id="paint2_linear_4_39" x1="33.3263" y1="54.1579" x2="70.0337" y2="41.194" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41A247"/>
        <stop offset="0.352" stopColor="#4BA74B"/>
        <stop offset="0.956" stopColor="#67B554"/>
        <stop offset="1" stopColor="#69B655"/>
        </linearGradient>
        </defs>
        </svg>
    },{
        name : "Figma",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
        <path d="M24.3428 73C27.5696 73 30.6643 71.7181 32.9459 69.4365C35.2276 67.1548 36.5095 64.0601 36.5095 60.8333V48.6667H24.3428C21.116 48.6667 18.0214 49.9485 15.7397 52.2302C13.458 54.5119 12.1761 57.6065 12.1761 60.8333C12.1761 64.0601 13.458 67.1548 15.7397 69.4365C18.0214 71.7181 21.116 73 24.3428 73Z" fill="#0ACF83"/>
        <path d="M12.1761 36.5C12.1761 33.2732 13.458 30.1786 15.7397 27.8969C18.0214 25.6152 21.116 24.3333 24.3428 24.3333H36.5095V48.6667H24.3428C21.116 48.6667 18.0214 47.3848 15.7397 45.1031C13.458 42.8214 12.1761 39.7268 12.1761 36.5Z" fill="#A259FF"/>
        <path d="M12.1761 12.1667C12.1761 8.94151 13.4567 5.84831 15.7363 3.56689C18.016 1.28547 21.1082 0.00251965 24.3333 0L36.5 0V24.3333H24.3428C21.116 24.3333 18.0214 23.0515 15.7397 20.7698C13.458 18.4881 12.1761 15.3935 12.1761 12.1667Z" fill="#F24E1E"/>
        <path d="M36.5095 0H48.6762C51.903 0 54.9976 1.28184 57.2793 3.56353C59.561 5.84523 60.8429 8.93987 60.8429 12.1667C60.8429 15.3935 59.561 18.4881 57.2793 20.7698C54.9976 23.0515 51.903 24.3333 48.6762 24.3333H36.5095V0Z" fill="#FF7262"/>
        <path d="M60.8429 36.5C60.8429 39.7268 59.561 42.8214 57.2793 45.1031C54.9976 47.3848 51.903 48.6667 48.6762 48.6667C45.4494 48.6667 42.3547 47.3848 40.0731 45.1031C37.7914 42.8214 36.5095 39.7268 36.5095 36.5C36.5095 33.2732 37.7914 30.1786 40.0731 27.8969C42.3547 25.6152 45.4494 24.3333 48.6762 24.3333C51.903 24.3333 54.9976 25.6152 57.2793 27.8969C59.561 30.1786 60.8429 33.2732 60.8429 36.5Z" fill="#1ABCFE"/>
        </svg>
    },
    // {
    //     name : "Adobe",
    //     icon : ""
    // },,{
    //     name : "",
    //     icon : ""
    // }
    ]
    return(<div className="web">
        <Banner firstPath={"Home"} link={"/"} secondPath={"Website development"} />
        <div className="px-4 sm:px-10 my-10">
            <HeadingForDynamic  subTitle={"Web Design/ UX Design/ Website CMS"} title={"Website Development"}  />
            <h3 className="my-5">For over fifteen years, we’ve been captivating and involving users with visually striking websites.</h3>
            <p>Entrance users with compelling visuals and ensure their engagement by facilitating easy navigation to desired content. While aesthetics inspire, user-friendliness is paramount for success. As a Dubai-based Web Design Agency, we advocate for harmonizing these elements for optimal user experience. Our proficient web designers will craft your website with the specific aim of meeting your objectives, whether it’s lead conversion, sales generation, or traffic driving.</p>
            <div className="line-divide  my-5" ></div>
            <div className="flex items-center divided ">
                <div className="title">
                    <div>Mobile-first </div>
                    <div>optimised websites</div>
                </div>
                <div>
                    <p>Ensuring a consistent user experience across all devices is crucial. As a web design agency, we meticulously evaluate designs for their appearance and ease of navigation on various devices.</p>
                </div>
            </div>
            

        </div>
        <div className="bg ">
            <div className="lines">
                {Array.from({ length: 1000 }).map((_, idx) => {
                        const height = Math.floor(Math.random() * 400) + 100; // 100px to 500px
                        const delay = Math.random() * 3; // 0s to 3s
                    return <div key={`Line_${idx}`}  style={{
                        height: `${height}px`,
                        animationDelay: `${delay}s`,
                    }} className="line" ></div>
                })}
            </div>
            <div className="content-bg px-4 sm:px-10 gap-2 md:gap-10 items-center">
                <div className="w-full">
                    <h3 className="mb-5">Designing a website for the end user</h3>
                    <p>A successful website should be captivating, user-friendly, and tailored to your target audience. The user’s journey plays a pivotal role in converting prospects into loyal customers. Every design choice influences how users engage with the page. It’s crucial to provide relevant information to empower users in their decision-making process, while strategically placed calls to action should steer them towards key objectives. Our team of web designers prioritizes user experience, crafting websites that prioritize the needs of your audience. We’ll offer expert guidance on optimal features and create designs centered around seamless navigation to maximize your website’s conversion potential.</p>
                </div>
                <div className="w-full">
                    <h3 className="mb-5">Manage your website independently</h3>
                    <p>Utilizing a CMS simplifies the process of consistently adding fresh content and maintaining the relevance of your website. This not only enhances user experience but also increases the frequency of Google’s crawls. Our web designers construct all our websites with CMS platforms such as Joomla, WordPress, and Drupal, granting you the flexibility to update your site at your convenience. With total control over your website, you can effortlessly edit content, add new pages, and train staff on its usage. Routine tasks no longer require developer assistance, empowering you to manage your site independently.</p>
                </div>
                
            </div>
        </div>
        <div ref={targetRef} className="flex parent-tech items-center px-4 sm:px-10 divided py-16">
                <div className="title">
                    <div>Web Development </div>
                    <div>latest Technology</div>
                </div>
                {isIntersecting && <div className="flex child-tech gap-5">
                    {data.map((ele,idx)=>{
                        return <div  className="container-technology flex flex-col items-center" key={`Technologies_${ele.name}_${idx}`}>
                            <div style={{
                            animationDelay : `${idx*0.3}s` 
                        }} className="icon-technology">{ele.icon}</div>
                            <h4 style={{
                            animationDelay : `${idx*0.3}s` 
                        }}  className="py-4 capitalize">{ele.name}</h4>
                        </div>
                    })}
                </div>}
            </div>
    </div>)
}

export default WebsiteDevelopment