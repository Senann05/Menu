import './cheescake.css'
import cheesecake from './assets/cheesecake.png'

function Cheescake() {
return(
<>
   <h2><h1 className='pagecheesecakelarh1'>CheeseCake'ler</h1></h2>

   <div className='containercheesecake'>

  <div className='pagecatalog'>
    <img src={cheesecake} className='imgpagecheesecake'></img>
   <div className='text-container'>
    <h1>San Sebastian CheeseCake</h1>
    <p> 55 AZN</p>
    <button className='pagecheesecakeBut'>Sebete at</button>
   </div></div> 

   <div className='pagecatalog'>
    <img src={cheesecake} className='imgpagecheesecake'></img>
   <div className='text-container'>
    <h1>Sokaladli CheeseCake</h1>
    <p> 45 AZN</p>
    <button className='pagecheesecakeBut'>Sebete at</button>
   </div></div>

   <div className='pagecatalog'>
    <img src={cheesecake} className='imgpagecheesecake'></img>
   <div className='text-container'>
    <h1>Ciyelekli CheeseCake</h1>
    <p> 45 AZN</p>
    <button className='pagecheesecakeBut'>Sebete at</button>
   </div></div>

   <div className='pagecatalog'>
    <img src={cheesecake} className='imgpagecheesecake'></img>
   <div className='text-container'>
    <h1>Moruqlu CheeseCake</h1>
    <p>45 AZN</p>
    <button className='pagecheesecakeBut'>Sebete at</button>
   </div></div>

   <div className='pagecatalog'>
    <img src={cheesecake} className='imgpagecheesecake'></img>
   <div className='text-container'>
    <h1>Limonli CheeseCake</h1>
    <p> 45 AZN</p>
    <button className='pagecheesecakeBut'>Sebete at</button>
   </div></div>

   <div className='pagecatalog'>
    <img src={cheesecake} className='imgpagecheesecake'></img>
   <div className='text-container'>
    <h1>Almali CheeseCake</h1>
    <p> 45 AZN</p>
    <button className='pagecheesecakeBut'>Sebete at</button>
   </div></div>

</div>
</>
)
}
export default Cheescake