import { useEffect } from "react";
import Banner from "../../components/banner"
import HeadingForDynamic from "../../components/headingForDynamic"
import Start from "../../components/start";


const SEOPage = ()=>{
    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'smooth' });
    },[])
    return(<div className="web">
    <Banner firstPath={"Home"} link={"/"} secondPath={"SEO"} />
    <div className="px-4 sm:px-10 my-10">
        <HeadingForDynamic  subTitle={"Search Engine Optimisation"} title={"SEO"}  />
        <h3 className="my-5">Enhance your website’s natural search performance by implementing an SEO strategy backed by data analysis, ensuring a profitable outcome.</h3>
        <p className="pb-2 services-p">We aim to enhance your website’s organic traffic and boost conversions through a continuous SEO approach. Our strategy prioritizes attracting users who are most likely to engage and convert by ensuring that top search results align with their search queries. We meticulously research and analyze your website, target audience, and competitors to inform our SEO campaign. Subsequently, we develop a plan to optimize content, improve design, and enhance site functionality while strategically promoting your website across online platforms.</p>
        <div className="line-divide  my-5" ></div>
        <div className="flex items-center divided ">
            <div className="title">
                <div>Research, audit, analysis</div>
            </div>
            <div>
                <p>We tailor our strategies to each client, recognizing the uniqueness of every business and website. By comprehensively understanding your business, objectives, and competitive landscape, we conduct an SEO audit to craft a personalized strategy geared towards achieving your desired outcomes.</p>
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
        <div  className="content-bg px-4 sm:px-10 gap-2 md:gap-10 ">
            <div className="w-full">
                <h3 className="mb-5">Competitor Analysis</h3>
                <p>Our process begins with thorough keyword and competitor analysis to evaluate your current search performance. Examining your competitors’ websites yields valuable insights on optimizing your own site effectively. This analysis identifies both strengths and weaknesses in your current site, as well as opportunities for enhancement.</p>
            </div>
            <div className="w-full">
                <h3 className="mb-5">Recommendations</h3>
                <p>Using our research findings and expertise, we will offer tailored recommendations and develop a customized search engine optimization strategy. We utilize Google Analytics and specialized SEO software to continuously monitor your website’s performance and track progress towards your specific goals.</p>
            </div>
            <div className="w-full">
                <h3 className="mb-5">Action</h3>
                <p>Based on the data gathered, we will react and respond, making alterations and updates to the websites when necessary.</p>
            </div>
        </div>
    </div>
    <div className="flex px-4 sm:px-10   items-center divided  py-16">
            <div className="title">
                <div>Technical SEO</div>
            </div>
            <div>
                <p>Maintaining your site’s health is crucial, ensuring easy access for both users and search engines to web content. Technical SEO addresses indexation concerns, broken links, and crawl irregularities. We utilize Google tools such as Search Console and third-party resources to monitor and manage website health effectively.</p>
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
            <h3 className="mb-5">On-site SEO</h3>
            <p>
            On-page SEO aims to enhance site speed, design, and content to prioritize user-desired information. It transcends mere keyword inclusion, considering how design and content shape user experience. By prioritizing user needs, relevant search terms are naturally integrated. Our SEO team adheres to Google’s best practices, leveraging its wealth of resources. We stay updated on evolving search trends and techniques, ensuring a user-centric approach to content optimization that elevates your site’s performance.</p>
        </div>
        <div className="w-full">
            <h3 className="mb-5">Off-site SEO</h3>
            <p>Maintaining a consistent brand image and establishing trustworthiness across the web is crucial for your website’s success. Off-site SEO encompasses various strategies such as outreach efforts, enhancing brand visibility on social platforms, managing third-party review sites, and optimizing Google My Business and Bing Places listings. Our team ensures that your website maximizes its presence on these external channels by monitoring and actively managing them as part of your campaign.</p>
        </div>

    </div>
    </div>
    <Start/>
</div>       

)
}

export default SEOPage