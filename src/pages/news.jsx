import { Helmet } from "react-helmet-async"
import Banner from "../components/banner"
import CardNews from "../components/cardNews"
import { news } from "../data/data"
import { useEffect } from "react"

const NewsPage =  ()=>{
    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'smooth' });
    },[])
    return(<div className="news-page">
        <Helmet>
            <title>Insights & News | Ariz Global</title>
            <meta name="description" content="Read articles and tips about digital marketing, SEO, branding, and more." />
            <link rel="canonical" href="https://arizglobal.com/news" />
        </Helmet>

        <Banner firstPath={"Home"} link={"/"} secondPath={"News"} />
        <div className=" px-4 sm:px-10 my-16 container-card-news-page" >
            {news.map((e,idx)=>{

                return <div style={{
                    animationDelay:`${idx * 0.1}s`
                }} className="card-news-animation" key={`News_Page_${e.title}_${idx}`}>
                <CardNews link={e.link} isFromNewsPage={true} description={e.description} title={e.title} image={e.image} />
            </div>
            })}

        </div>
    </div>)
}
export default NewsPage