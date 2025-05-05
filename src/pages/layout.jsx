import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Whatsapp from "../components/whatsapp"

const Layout = ()=>{
    return(<>
    <Navbar/>
    <Outlet/>
    <Whatsapp/>
    <Footer/>

    </>)
}
export default Layout