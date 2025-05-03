import { Link } from "react-router-dom"

const Banner = ({firstPath,link, secondPath })=>{
    return(<div className="banner-bg shadow-xl">
        <div className="banner-path p-5 flex right-4 sm:right-10 items-center gap-2">
                <Link to={link}> <div className="first-path">{firstPath}</div> </Link>
                {secondPath && <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                        <g clipPath="url(#clip0_5_540)">
                        <line x1="2.62128" y1="20.4091" x2="11.6213" y2="-0.590879" stroke="#C3996B" strokeWidth="3"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_5_540">
                        <rect width="14" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>}
                {secondPath && <div className="second-path">{secondPath}</div>}
                
                
        </div>
    </div>)
}


export default Banner