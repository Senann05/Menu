import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <Routes>
//     <Route path='/Home' element={<Home/>}/> 
//     </Routes>
//   </BrowserRouter>,
// )