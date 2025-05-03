import Banner from "../components/banner"
import CardNews from "../components/cardNews"
import { news } from "../data/data"

const NewsPage =  ()=>{

    return(<div className="news-page">
        <Banner firstPath={"Home"} link={"/"} secondPath={"News"} />
        <div className=" px-4 sm:px-10 my-16 container-card-news-page" >
            {news.map((e,idx)=>{

                return <div style={{
                    animationDelay:`${idx * 0.1}s`
                }} className="card-news-animation" key={`News_Page_${e.title}_${idx}`}>
                <CardNews isFromNewsPage={true} description={e.description} title={e.title} image={e.image} />
            </div>
            })}

        </div>
    </div>)
}
export default NewsPage