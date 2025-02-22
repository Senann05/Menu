import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './home.jsx'
import Tort from './tort.jsx'
import Sirniyyat from './sirniyyat.jsx'
import Cheesecake from './cheescake.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path='/home' element={<Home/>}/> 
    <Route path='/tort' element={<Tort/>}/> 
    <Route path='/sirniyyat' element={<Sirniyyat/>}/>
    <Route path='/cheesecake' element={<Cheesecake/>}/>            

    </Routes>
  </BrowserRouter>,
)