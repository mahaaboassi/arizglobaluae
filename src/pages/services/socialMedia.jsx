import { useEffect } from "react";
import Banner from "../../components/banner"
import Start from "../../components/start"
import HeadingForDynamic from "../../components/headingForDynamic";

const SocialMedia = ()=>{
    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'smooth' });
    },[])
    return(<div>
    <Banner firstPath={"Home"} link={"/"} secondPath={"social Media"} />
    <div className="px-4 sm:px-10 my-10">
        <HeadingForDynamic  subTitle={"SMM"} title={"Social Media Marketing"}  />
        <h3 className="my-5">We strategize, execute, and deliver dynamic and captivating social media marketing plans tailored for businesses.</h3>
        <p className="services-p">Social media serves as an essential tool for enhancing your online presence, allowing you to distribute content and foster connections with both potential prospects and current clientele. Utilizing social media for promotion is indispensable, offering access to audiences beyond the scope of conventional marketing methods. With a global user base exceeding 4.5 billion individuals, social media has become ingrained in contemporary culture, presenting an enticing avenue for business expansion by strengthening brand identity and promoting services or products. Thus, ensuring consistent engagement on social platforms is a vital aspect of your marketing blueprint.</p>
        <div className="line-divide  my-5" ></div>
        <div className="flex items-center divided ">
            <div className="title">
                <div>Expert knowledge</div>
            </div>
            <div>
                <p>Employing social media marketing enhances interaction with your business and creates fresh avenues for growth. Whether it’s unveiling new products, disseminating company updates, or hosting contests, maintaining a robust presence across various digital platforms is imperative for businesses.</p>
            </div>
        </div>
        

    </div>
    <div  className="bg">
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
        <div  className="content-bg px-4 sm:px-10 gap-2 md:gap-10 items-center">
            <div className="w-full">
                <h3 className="mb-5">Paid social media advertising​</h3>
                <p>Paid social media advertising includes enhancing your posts to extend their reach rapidly. We’ll collaborate with you to determine the most suitable budget aligned with your objectives and industry.</p>
                <p>With extensive expertise in paid ads across diverse social platforms, we guarantee maximum reach, increased engagement, and heightened likes and conversions.</p>
                <p>As a seasoned social media agency, we excel in managing social media for businesses. We recognize the significance of targeted social advertisements in acquiring new customers and boosting potential conversions within valuable demographics.</p>
            </div>
            <div className="w-full">
                <h3 className="mb-5">Adding variety to your social media</h3>
                <p>Effective social media marketing is enhanced when seamlessly integrated into broader marketing strategies. When managed effectively, it becomes a pivotal asset in achieving business objectives. Combined with SEO and content marketing, social media amplifies your online presence and drives traffic to your website. It also plays a crucial role in shaping brand personality, fostering customer loyalty through engaging communication.</p>
                <p>Our in-house team ensures diverse and captivating social media content, incorporating graphics, videos, blog posts, and more to maintain appealing digital touchpoints.</p>
            </div>

            
        </div>
       
    </div>

    <div className="flex px-4 sm:px-10   items-center divided  py-16">
        <div className="title">
            <div>Social media mastery</div>
        </div>
        <div>
            <p>We’ll create and execute a customized social media plan for your business, showcasing your services, values, and personality through online content. If managing social platforms seems daunting, our management service can help spread your brand’s message effectively to targeted audiences.</p>
        </div>
    </div>
    <Start/>
</div>)
}

export default SocialMedia