import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Contact from './pages/contact'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './pages/layout'
import About from './pages/about'
import NewsPage from './pages/news'
import Page_404 from './pages/404page'
import NewsDetails from './pages/newsDetails'
import SEOPage from './pages/services/seo'
import ContentMarketing from './pages/services/contentMarketing'
import GraphicDesign from './pages/services/graphicDesign'
import PaidAds from './pages/services/paidAds'
import SocialMedia from './pages/services/socialMedia'
import WebsiteDevelopment from './pages/services/webDevelopment'



function App() {


  return (<HelmetProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/*' element={<Layout/>} >
                  <Route path="" element={<Home/>} />
                  <Route path='about' element={<About/>} />
                  <Route path="news" element={<NewsPage/>} />
                  <Route path="news/:link" element={<NewsDetails/>} />
                  <Route path="contact" element={<Contact/>} />
                  {/* Services Pages */}
                  <Route path="seo" element={<SEOPage/>} />
                  <Route path="content-marketing" element={<ContentMarketing/>} />
                  <Route path="graphic-design" element={<GraphicDesign/>} />
                  <Route path="paid-advertising" element={<PaidAds/>} />
                  <Route path="social-media-marketing" element={<SocialMedia/>} />
                  <Route path="website-development" element={<WebsiteDevelopment/>} />

                  <Route path='page-not-found' element={<Page_404/>} />
                  <Route path='*' element={<Page_404/>} />
                </Route>
              </Routes>
            </BrowserRouter>
        </HelmetProvider>
  )
}

export default App
