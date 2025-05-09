import { Link } from "react-router-dom"
import { news } from "../data/data"

const Footer = ()=>{
    
    const data =[{
        name : "facebook    ",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="10" height="25" viewBox="0 0 109 205" fill="none">
        <path d="M72.9794 46.2227V75.0148H108.599L102.959 113.808H72.9794V203.175C66.9668 204.013 60.8171 204.446 54.5762 204.446C47.3686 204.446 40.2981 203.868 33.4026 202.757V113.808H0.553772V75.0148H33.4026V39.7914C33.4026 17.9328 51.1208 0.20697 72.987 0.20697V0.229802C73.0479 0.229802 73.1088 0.20697 73.1697 0.20697H108.606V33.7484H85.4537C78.5658 33.7484 72.987 39.3272 72.987 46.215L72.9794 46.2227Z" fill="#3C3C3B"/>
        </svg>,
        link : "https://www.facebook.com/arizglobal?_rdr"
    },{
        name : "linkedin",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 151 149" fill="none">
        <path d="M5.72955 29.9378C2.20568 26.6651 0.44751 22.6161 0.44751 17.7983C0.44751 12.9806 2.20568 8.74898 5.72955 5.47628C9.25341 2.20357 13.7894 0.567261 19.353 0.567261C24.9166 0.567261 29.2701 2.20357 32.7864 5.47628C36.3102 8.74898 38.0684 12.8588 38.0684 17.7983C38.0684 22.7378 36.3102 26.6651 32.7864 29.9378C29.2625 33.2105 24.7872 34.8468 19.353 34.8468C13.9188 34.8468 9.25341 33.2105 5.72955 29.9378ZM35.1001 48.7064V148.996H3.41579V48.7064H35.1001Z" fill="#3C3C3B"/>
        <path d="M140.595 58.6082C147.498 66.1049 150.954 76.4026 150.954 89.5086V147.23H120.852V93.5805C120.852 86.9742 119.14 81.8368 115.715 78.1759C112.29 74.5151 107.686 72.6884 101.901 72.6884C96.117 72.6884 91.5123 74.5227 88.0874 78.1759C84.6625 81.8368 82.95 86.9742 82.95 93.5805V147.23H52.6737V48.4323H82.95V61.5384C86.0172 57.1698 90.15 53.722 95.3483 51.18C100.539 48.6455 106.384 47.3745 112.876 47.3745C124.445 47.3745 133.684 51.1266 140.588 58.6158L140.595 58.6082Z" fill="#3C3C3B"/>
        </svg>,
        link : "https://www.linkedin.com/company/ariz-global/posts/?feedView=all"
    },{
        name : "youtube",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="35" viewBox="0 0 172 121" fill="none">
        <path d="M170.244 32.9406C169.201 22.8029 166.941 11.6072 158.629 5.71632C152.183 1.14976 143.72 0.982351 135.819 0.989962C119.113 1.00518 102.408 1.02036 85.7015 1.03558C69.6348 1.0508 53.5681 1.06607 37.5015 1.08129C30.7886 1.08129 24.2661 0.56375 18.0327 3.46352C12.6746 5.9599 8.4886 10.7015 5.97699 15.9758C2.47596 23.3204 1.73771 31.6315 1.3191 39.7524C0.542789 54.5328 0.626515 69.359 1.56266 84.1242C2.24003 94.9089 3.9677 106.82 12.3017 113.693C19.6919 119.781 30.1189 120.078 39.6934 120.086C70.1067 120.109 100.52 120.131 130.933 120.162C134.83 120.162 138.902 120.093 142.875 119.66C150.699 118.815 158.15 116.577 163.173 110.785C168.242 104.948 169.544 96.8116 170.32 89.117C172.192 70.455 172.169 51.595 170.244 32.9406ZM68.1127 86.7499V34.402L113.451 60.576L68.1127 86.7499Z" fill="#3C3C3B"/>
        </svg>,
        link : "https://www.youtube.com/@arizglobal"
    },{
        name : "instagram",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 167 160" fill="none">
        <path d="M124.645 0.930908H41.8613C18.9904 0.930908 0.389282 19.532 0.389282 42.4029V118.139C0.389282 141.01 18.9904 159.611 41.8613 159.611H124.645C147.516 159.611 166.117 141.01 166.117 118.139V42.4029C166.117 19.532 147.516 0.930908 124.645 0.930908ZM15.0175 42.4029C15.0175 27.5996 27.058 15.5591 41.8613 15.5591H124.645C139.449 15.5591 151.489 27.5996 151.489 42.4029V118.139C151.489 132.943 139.449 144.983 124.645 144.983H41.8613C27.058 144.983 15.0175 132.943 15.0175 118.139V42.4029Z" fill="#3C3C3B"/>
        <path d="M83.2495 118.847C104.522 118.847 121.829 101.54 121.829 80.2672C121.829 58.9947 104.522 41.6874 83.2495 41.6874C61.977 41.6874 44.6697 58.9947 44.6697 80.2672C44.6697 101.54 61.977 118.847 83.2495 118.847ZM83.2495 56.3232C96.4545 56.3232 107.194 67.0623 107.194 80.2672C107.194 93.4722 96.4545 104.211 83.2495 104.211C70.0445 104.211 59.3055 93.4722 59.3055 80.2672C59.3055 67.0623 70.0445 56.3232 83.2495 56.3232Z" fill="#3C3C3B"/>
        <path d="M125.406 47.9208C131.137 47.9208 135.803 43.2553 135.803 37.5243C135.803 31.7932 131.137 27.1277 125.406 27.1277C119.675 27.1277 115.01 31.7932 115.01 37.5243C115.01 43.2553 119.675 47.9208 125.406 47.9208Z" fill="#3C3C3B"/>
        </svg>,
        link : "https://www.instagram.com/arizglobaluae"
    }]
    return(<footer>
            <div className="first-footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-10 gap-5 py-26">
                <div className="">
                    <h3>About Us</h3>
                    <p>Ariz Global was founded with the mission of delivering specialized marketing solutions. Our team boasts extensive expertise in professional public relations services and digital marketing, coupled with a global network of connections.</p>
                    <div className="flex gap-2">
                        {data.map((e,idx)=>(<Link key={`Social_Media_${e.name}_${idx}`} target="_blank" to={e.link}>
                        <div className="footer-icon" aria-label={e.name} >{e.icon}</div>
                        </Link>))}
                    </div>
                </div>
                <div>
                    <h3>New Feeds</h3>
                    <div className="flex  flex-col gap-2" >
                      {news.map((e,idx)=>(<Link key={`Footer_${e.title}_${idx}`} to={`/news/${e.link}`}>
                        <div className="link-hover" >{e.title}</div>
                      </Link>))}
                    </div>
                    
                </div>
                <div>
                    <h3>Newsletter</h3>
                    <p>Subscribe our newsletter to get our latest updates & news.</p>
                    <div className="subscribe">
                        <input placeholder="Email address"/>
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 13 8" fill="none">
                                <path d="M13 4L9.00002 0V3H0V5H9.00002V8L13 4Z" fill="#ca9e67"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="final-footer py-5">

                © 2024 Ariz Global Marketing Agency. All rights reserved.

            </div>
    </footer>)
}

export default Footer