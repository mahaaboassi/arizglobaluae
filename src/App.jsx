import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Contact from './pages/contact'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './pages/layout'
import About from './pages/about'

function App() {


  return (<HelmetProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/*' element={<Layout/>} >
                  <Route path="" element={<Home/>} />
                  <Route path='about' element={<About/>} />
                  <Route path="contact" element={<Contact/>} />
                </Route>
              </Routes>
            </BrowserRouter>
        </HelmetProvider>
  )
}

export default App
