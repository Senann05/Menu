import './index.css'
import spartak from '.aassets/spartak.jpg'
function Home() {


  return (
    <>
   <div className='container'>
      <h1 className='menu'>Menu</h1>
      <div className="card">
        <p>Welcome to RENU</p>
        <p>Location - ! Yeni Yasmal</p>
      </div>

<div>
  <h3>Spartak Tortu</h3>
  <img src={spartak} className='imghome1'></img>

</div>

</div>
   </ >
  )
}
export default Home
