import { useEffect } from "react";
import Banner from "../../components/banner"
import HeadingForDynamic from "../../components/headingForDynamic"
import Start from "../../components/start";

const ContentMarketing = ()=>{
    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'smooth' });
    },[])
    return(
    <div className="web">
        <Banner firstPath={"Home"} link={"/"} secondPath={"Content marketing"} />
        <div className="px-4 sm:px-10 my-10">
            <HeadingForDynamic  subTitle={"Content Strategy/ Email Marketing"} title={"Content Marketing"}  />
            <h3 className="my-5">Content serves as a powerful means of connecting with your target audience, but its success requires proper guidance and direction.</h3>
            <p className="services-p">We specialize in assisting clients in crafting engaging content that drives audience interaction and secures new business. Content isn’t merely a sales tool; it’s aimed at attracting new users and raising brand awareness. Behind every successful content piece lies meticulous planning and a robust strategy to ensure it meets user needs. Content plays a vital role in your overarching marketing strategy, whether it’s boosting your social media presence or supporting your SEO efforts. We excel in content planning and identifying audience interests through keyword and competitor analysis. Our team creates unique and compelling content for dissemination across your marketing channels. Additionally, we offer support in updating and improving existing content to maximize its SEO potential.</p>
            <div className="line-divide  my-5" ></div>
            <div className="flex items-center divided ">
                <div className="title">
                    <div>Email marketing</div>
                </div>
                <div>
                    <p>Email remains a highly effective and widely used marketing channel, boasting click-through rates that surpass those of social media and affiliate marketing. Additionally, our team ensures that all email campaigns adhere to GDPR regulations.</p>
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
                    <h3 className="mb-5">Content Strategy</h3>
                    <p>Content’s efficacy hinges on the strategy driving it. Developing and implementing cross-channel content in diverse formats is essential for amplifying your brand’s presence. Whether it’s through whitepapers, guest posts, podcasts, or videos, the true value of content lies in devising a structured strategy to connect with new audiences and retain existing ones. We collaborate closely with brands to assist them in crafting successful strategies while evaluating their content marketing endeavors and adapting plans to meet business objectives. From initial research to PR and continual content creation, we offer comprehensive content marketing strategies tailored to your brand’s needs.</p>
                </div>
                <div className="w-full">
                    <h3 className="mb-5">Research to Uncover Opportunities</h3>
                    <p>We partner with clients to brainstorm fresh ideas and conduct thorough research into the existing content landscape within your industry or sector. This informs your content marketing strategy, enabling you to address any content gaps overlooked by competitors. Through extensive research, we identify trending topics and niches, integrating them into a comprehensive content marketing plan. With the collective support of our development and design teams, our marketing team executes effective content marketing campaigns driven by our research findings.</p>
                </div>
                
            </div>
        </div>
        <div className="flex px-4 sm:px-10   items-center divided  py-16">
                <div className="title">
                    <div>Copywriting & Digital PR</div>
                </div>
                <div>
                    <p>Our proficient team of copywriters boasts expertise in crafting diverse types of content, spanning from concise social media copy to comprehensive technical brochures. We offer a comprehensive range of copywriting services to cater to our clients’ needs.</p>
                </div>
            </div>
            <Start/>
    </div>    
)
}

export default ContentMarketing