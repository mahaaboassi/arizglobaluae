import { useRef, useState , useEffect} from "react"
import Banner from "../components/banner"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { contactInfo } from "../data/data"
import { Helmet } from "react-helmet-async"

const Contact = ()=>{

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
    return (<div className="contant-page">
        <Helmet>
            <title>Contact Us | Ariz Global</title>
            <meta name="description" content="Get in touch with Ariz Global for digital marketing, web development, and creative design services." />
            <link rel="canonical" href="https://arizglobal.com/contact" />
        </Helmet>
        <Navbar/>
        <Banner firstPath={"Home"} link={"/"} secondPath={"Contact Us"}/>
        <div className="map w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.063995019356!2d55.170309375395014!3d24.997941339742585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69e8137cf3dd%3A0x85beecae1d102683!2sAriz%20Global!5e0!3m2!1sen!2sae!4v1746170669837!5m2!1sen!2sae"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div ref={targetRef}  className={`flex gap-3 lg:gap-10 justify-between px-4 sm:px-10 container-contact ${isIntersecting ? "up-div":""}`}>
                {
                contactInfo.map((e,idx)=>(<div className="card-content-contact  p-3">
                            <div className="flex flex-col items-center justify-center gap-5 card-contact p-5 lg:p-8 " key={`Contact_Info_${e.key}_${idx}`}>
                                        <div dangerouslySetInnerHTML={{__html: e.icon}}/>
                                        <div className="line-contact"></div>
                                        <h3> {e.name} </h3>
                                        <p style={e.key == "email"?{textTransform:"none"}:{}}>{e.value}</p>
                                    </div>
                                 
                            </div>))
                    }
            </div>
        </div>
        <div className="form-contact px-4 sm:px-10 py-16">
            <div className="first-contact">
                <h3>Get Pure Estimate</h3>
                <h2 className="mb-5">Get In Touch With us</h2>
                <p>
                    We're a results-driven digital marketing agency helping brands grow online. 
                    Whether you need a new strategy, a website revamp, or full-scale digital campaigns — 
                    we're here to help. Reach out today and let’s start building something great together.
                </p>
            </div>
            <form className="second-contact flex flex-col gap-3">
                <div><input placeholder="Name" /></div>
                <div><input placeholder="Email" /></div>
                <div><textarea rows={4} placeholder="Message" /></div>
                <div><button className="w-full">submit</button></div>
            </form>
        </div>
        <Footer/>
    </div>)
}

export default Contact