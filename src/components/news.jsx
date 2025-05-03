import { news } from "../data/data"
import Heading from "./heading"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // optional modules

import { Navigation , Autoplay } from 'swiper/modules';
import CardNews from "./cardNews";


const News = ()=>{

    return(<div id="news" className="news relative  px-4 py-16  sm:px-10">
        <Heading title={"New Feeds"} subTitle={"Insights"} />
        <div className="container-news pt-16  " >
            <Swiper
                modules={[Navigation , Autoplay]}
                navigation
                autoplay={{
                    delay: 3000,       // Slide every 3 seconds
                    disableOnInteraction: false, // Keep autoplay after user interaction
                  }}
                spaceBetween={0}
                slidesPerView={3}
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                  }}
                >
                                {
                   news.map((e,idx)=>(<SwiperSlide className="sm:p-5 lg:p-10"  key={`News_${e.title}_${idx}`}>
                        <CardNews description={e.description}  image={e.image} title={e.title} />
                   </SwiperSlide>)) 
                }

            </Swiper>

            
        </div>
    </div>)
}

export default News