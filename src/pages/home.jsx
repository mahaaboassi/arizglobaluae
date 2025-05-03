import { Helmet } from "react-helmet-async"
import FAQs from "../components/faq"
import HeroSection from "../components/hero"
import News from "../components/news"
import Services from "../components/services"
import Whatsapp from "../components/whatsapp"

const Home = ()=>{
    return(<div>
        <Helmet>
            <title>Ariz Global | Marketing Agency</title>
            <meta name="description" content="Ariz Global is a leading 360° digital marketing agency in Dubai, United Arab Emirates,  empowering brands to thrive in today's dynamic landscape. We leverage the power of cutting-edge technology, including AI, to deliver customized solutions across the entire marketing spectrum." />
            <link rel="canonical" href="https://arizglobal.com" />
        </Helmet>
        <HeroSection/>
        <Services/>
        <News/>
        <FAQs/>
        
        <Whatsapp/>
    </div>)

}

export default Home