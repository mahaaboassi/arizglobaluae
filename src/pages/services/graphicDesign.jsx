import { useEffect } from "react";
import Banner from "../../components/banner"
import Start from "../../components/start"
import HeadingForDynamic from "../../components/headingForDynamic";

const GraphicDesign = ()=>{
    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'smooth' });
    },[])
    return( <div className="web">
    <Banner firstPath={"Home"} link={"/"} secondPath={"Graphic Design"} />
    <div className="px-4 sm:px-10 my-10">
        <HeadingForDynamic  subTitle={"GD/ Creative Designing"} title={"Graphic Design"}  />
        <h3 className="my-5">We provide top-notch graphic design services encompassing brand identity and print design for our clients.</h3>
        <p className="pb-2 services-p">Whether you seek a rebrand or aim to craft top-tier promotional materials, our adept graphic design agency boasts in-house talent capable of delivering impressive designs. Collaborating closely with you, our seasoned graphic designers tailor bespoke creations aligned with your specific needs, enabling direct engagement with your target demographic through impactful visual content.</p>
        <div className="line-divide  my-5" ></div>
        <div className="flex items-center divided ">
            <div className="title">
                <div>Build your premium content</div>
            </div>
            <div>
                <p>Crafting a brand identity encompasses more than just designing a logo. While a logo serves as a business’s symbol, it doesn’t encompass the entirety of a brand. In reality, creating a logo is merely a single aspect in the broader process of establishing a robust brand identity.</p>
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
                <h3 className="mb-5">Logo Design</h3>
                <p>Your logo stands as a vital visual representation of your brand, often serving as the initial point of contact for your target audience. It’s essential that your logo effectively communicates your business’s identity, ensuring a memorable impact. Crafting a fitting logo is merely the beginning of cultivating your brand image.</p>
            </div>
            <div className="w-full">
                <h3 className="mb-5">Brand Guidelines</h3>
                <p>We can assist you in establishing brand guidelines to uphold the consistent visual identity of your brand. These guidelines dictate the presentation of your brand and marketing materials across various platforms, both online and offline, covering elements such as your logo, color schemes, and tone of voice.</p>
            </div>
            <div className="w-full">
                <h3 className="mb-5">Print Design</h3>
                <p>As a print-ready production agency, we collaborate with a network of professional commercial printers capable of ensuring top-notch quality for all your printed marketing materials. Our services encompass lithographic printing for branded stationery and brochures, alongside digital printing tailored for short-run marketing promotions.</p>
            </div>
        </div>
    </div>


    
    <Start/>
</div> )
}

export default GraphicDesign