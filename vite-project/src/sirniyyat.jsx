import './sirniyyat.css'
import sirniyyat from './assets/sirniyyat.png'
import {Link} from 'react-router-dom';

function Sirniyyat() {
return(
<>
   <h2><h1 className='pagesirniyyatlarh1'>Sirniyyatlar</h1></h2>

   <div className='containersirniyyat'>
    
   <div className='pagecatalog'>
    <img src={sirniyyat} className='imgpagesirniyyat'></img>
   <div className='text-container'>
    <h1>Paxlava</h1>
    <p> 22 AZN</p>
    <button className='pagesirniyyatBut'>Sebete at</button>
   </div></div>

   <div className='pagecatalog'>
    <img src={sirniyyat} className='imgpagesirniyyat'></img>
   <div className='text-container'>
    <h1>Sekerbura</h1>
    <p> 22 AZN</p>
    <button className='pagesirniyyatBut'>Sebete at</button>
   </div></div>

   <div className='pagecatalog'>
    <img src={sirniyyat} className='imgpagesirniyyat'></img>
   <div className='text-container'>
    <h1>Qogal </h1>
    <p> 25 AZN</p>
    <button className='pagesirniyyatBut'>Sebete at</button>
   </div></div>

   <div className='pagecatalog'>
    <img src={sirniyyat} className='imgpagesirniyyat'></img>
   <div className='text-container'>
    <h1>Badambura</h1>
    <p> 27 AZN</p>
    <button className='pagesirniyyatBut'>Sebete at</button>
   </div></div>

   <div className='pagecatalog'>
    <img src={sirniyyat} className='imgpagesirniyyat'></img>
   <div className='text-container'>
    <h1>Banan Sirniyyati</h1>
    <p> 24 AZN</p>
    <button className='pagesirniyyatBut'>Sebete at</button>
   </div></div>

   <div className='pagecatalog'>
    <img src={sirniyyat} className='imgpagesirniyyat'></img>
   <div className='text-container'>
    <h1>Soci Paxlavasi</h1>
    <p> 27 AZN</p>
    <button className='pagesirniyyatBut'>Sebete at</button>
   </div></div>

</div>
</>
)
}
export default Sirniyyat