import { useState } from "react";
import { faqs } from "../data/data"
import Accordion from "./accordion";

const FAQs = ()=>{
    const [openIndex, setOpenIndex] = useState(null);
    
    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };
    return(<div className="faq px-4 sm:px-10 my-16">
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 sm:gap-5 ">
                        <div>
                        {/* <h2>Question? We have answers</h2> */}
                        <div className="flex flex-col gap-5 ">
                            {faqs.map((e,idx)=>(<Accordion 
                                         key={`FAQs_${e.question}_${idx}`}
                                         question={e.question} answer={e.answer}  
                                         isOpen={openIndex === idx}
                                         onClick={() => handleToggle(idx)}
                                         />))}
                        </div>
                        </div>
                        <div>
                        
                           <div className="pb-5">
                                <h4>Estimate Budget - Start a Campaign</h4>
                                <h2 >Let's get started!</h2>
                           </div>
                            <form className="flex flex-col gap-3 sm:gap-5">
                                <div>
                                    <input placeholder="Name" />
                                </div>
                                <div>
                                    <input placeholder="Email" />
                                </div>
                                <div>
                                    <textarea className="w-full" rows={4} placeholder="Message" />
                                </div>
                                <div>
                                    <button className="btn-yellosh w-full">Get A Quote</button>
                                </div>
                            </form>
                        </div>
                    </div>
        </div>

    </div>)
}

export default FAQs