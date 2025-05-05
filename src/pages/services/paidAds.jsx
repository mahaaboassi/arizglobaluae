import { useEffect } from "react";
import Banner from "../../components/banner"
import HeadingForDynamic from "../../components/headingForDynamic"
import Start from "../../components/start";

const PaidAds = ()=>{
    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'smooth' });
    },[])
    return(
    <div className="web">
        <Banner firstPath={"Home"} link={"/"} secondPath={"Paid advertising"} />
        <div className="px-4 sm:px-10 my-10">
            <HeadingForDynamic  subTitle={"PA/ PPC"} title={"Paid Advertising"}  />
            <h3 className="my-5">Drawing from our extensive expertise in paid advertising, we craft customized campaigns tailored to diverse businesses across various sectors, effectively reaching untapped audiences on your behalf.</h3>
            <p className="pb-2 services-p">In a landscape inundated with countless businesses yearly, relying solely on free digital marketing channels to stand out can be daunting. When traditional methods yield diminishing returns, delving into Paid Advertising becomes imperative.</p>
            <p>Paid advertising operates through real-time auctions where bids secure ad placement on specific platforms or networks, typically charging per click or impression. Amidst the myriad options available, selecting the most suitable avenue hinges on factors like industry, business type, and objectives. As specialists in Paid Advertising, we guide you through strategic decision-making to optimize your ad strategy effectively.</p>
            <div className="line-divide  my-5" ></div>
            <div className="flex items-center divided ">
                <div className="title">
                    <div>What services are on offer?</div>
                </div>
                <div>
                    <p>At Ariz Global, we understand the significance of customizing your Paid Advertising approach to suit your unique needs. This is why we offer a comprehensive suite of Paid Advertising services, continually conducting research to deliver optimal outcomes. Our team takes pride in being recognized as an official Google Partner, boasting certifications from Google Ads and Meta among our members.</p>
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
                    <h3 className="mb-5">Pay Per Click / PPC</h3>
                    <p>Pay Per Click (PPC) represents a paid online advertising method that delivers immediate website traffic, rendering it an ideal marketing solution for numerous businesses. Our PPC offerings encompass various platforms, including Google Ads, Search Ads, Display Ads, Shopping Ads, Video Ads, and Bing Ads.</p>
                </div>
                <div className="w-full">
                    <h3 className="mb-5">Paid Advertising Audits</h3>
                    <p>Paid Advertising audits play a pivotal role in achieving success. Leveraging our expertise, we thoroughly evaluate the effectiveness of your paid advertising strategy by scrutinizing its performance metrics, costs, return on investment, and conversions. Typically conducted at the onset of our partnership, audits enable us to collaboratively establish and refine your paid advertising strategy.</p>
                </div>
                
            </div>
        </div>
        <div className="flex px-4 sm:px-10   items-center divided  py-16">
            <div className="title">
                <div>Why Hire an Agency for Ads?</div>
            </div>
            <div>
                <p>Maximize your marketing budget by entrusting our experts to steer the ship, sidestepping unnecessary time and resource wastage in discovering the most effective Paid Advertising options for your business. With our expertise, stay ahead of the curve, facilitating crucial growth and witnessing an upturn in your ROI and ROAS.</p>
            </div>
        </div>
        <Start/>
    </div>       
)
}

export default PaidAds