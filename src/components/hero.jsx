import { Link } from "react-router-dom"

const HeroSection = ()=>{
    return(<div className="hero-section px-4 sm:px-10 gap-3 sm:gap-5" >
        <div>
        <h1 className="sr-only">Ariz Global</h1>
        <h2 className="first-letters">
            <span>C</span>
            <span>R</span>
            <span>E</span>
            <span>A</span>
            <span>T</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
        </h2>
        <h2 className="second-letters">
            <span>o</span>
            <span>p</span>
            <span>P</span>
            <span>o</span>
            <span>R</span>
            <span>T</span>
            <span>u</span>
            <span>N</span>
            <span>I</span>
            <span>T</span>
            <span>I</span>
            <span>E</span>
            <span>S</span>
        </h2>
        </div>
        <p className="w-1/2">We Are committed to transform the future and proffitability of your business that will help you achieve your goals and objectives.</p>
        <div>
            <Link to="/contact"><button>get started now</button></Link> 
        </div>
        
    </div>)

}

export default HeroSection