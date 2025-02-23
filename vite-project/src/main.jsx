// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// import Home from './home.jsx'
// import Tort from './tort.jsx'
// import Sirniyyat from './sirniyyat.jsx'
// import Cheesecake from './cheescake.jsx'
// import Sebetim from './sebetim.jsx'
// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <Routes>
//     <Route path='/home' element={<Home/>}/> 
//     <Route path='/tort' element={<Tort/>}/> 
//     <Route path='/sirniyyat' element={<Sirniyyat/>}/>
//     <Route path='/cheesecake' element={<Cheesecake/>}/>
//     <Route path='/sebetim' element={<Sebetim/>}/>
//     </Routes>
//   </BrowserRouter>,
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext'; // ✅ CartProvider əlavə edildi
import Home from './home.jsx';
import Tort from './tort.jsx';
import Sirniyyat from './sirniyyat.jsx';
import Cheesecake from './cheescake.jsx';
import Sebetim from './sebetim.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>  {/* ✅ Bütün app üçün səbət konteksini təmin edir */}
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/tort' element={<Tort />} />
          <Route path='/sirniyyat' element={<Sirniyyat />} />
          <Route path='/cheesecake' element={<Cheesecake />} />
          <Route path='/sebetim' element={<Sebetim />} />
        </Routes>
      </Router>
    </CartProvider>
  </StrictMode>
);

