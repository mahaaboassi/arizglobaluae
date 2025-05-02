import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Contact from './pages/contact'
import { HelmetProvider } from 'react-helmet-async'

function App() {


  return (<HelmetProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
            </BrowserRouter>
        </HelmetProvider>
  )
}

export default App
