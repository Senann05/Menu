import './home.css'
import tort from './assets/tort.png'
import cheesecake from './assets/cheesecake.png'
import sirniyyat from './assets/sirniyyat.png'
import {Link} from 'react-router-dom';

function Home() {
  return (
    <>
   <div className='container'>
      <h1 className='menu'>Menu</h1>
      <div className="card">
        <h3>Welcome to <span className='domain'>RENU</span></h3>
        <p>Location - ! Insaatcilar </p>
      </div>

<div className='variants'>
  <div className='abc'>
  <h2 className='homehtegs'>Boyuk Tortlar</h2>
  <Link to='/tort'><img src={tort} className='imgtort'></img></Link>
</div>
<div>
  <h2 className='homehtegs'>Cheescakes</h2>
  <Link to='/cheesecake'><img src={cheesecake} className='imgtort'></img></Link>
</div>
<div>
  <h2 className='homehtegs'>Sirniyyatlar</h2>
  <Link to='/sirniyyat'><img src={sirniyyat} className='imgtort'></img></Link>
</div>
</div>
</div>
   </ >
  )
}
export default Home
