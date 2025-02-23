import './cheescake.css';
import cheesecake from './assets/cheesecake.png';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function CheeseItem({ name, price }) {
  const [clicked, setClicked] = useState(false);
  const { addToCart } = useContext(CartContext); // CartContext-dən funksiyanı götür

  const handleClick = () => {
    setClicked(true); // Buton rəngini dəyişmək üçün
    addToCart({ name, price, image: cheesecake }); // Məhsulu səbətə əlavə et
  };

  return (
    <div className='pagecatalog'>
      <img src={cheesecake} className='imgpagecheesecake' alt={name} />
      <div className='text-container'>
        <h1>{name}</h1>
        <p>{price} AZN</p>
        <button
          onClick={handleClick}
          style={{ backgroundColor: clicked ? "rgb(40, 225, 40)" : "black" }}
          className='pagecheesecakeBut'
          disabled={clicked} // Məhsul əlavə olunanda butonu deaktiv et
        >
          {clicked ? "Səbətdə" : "Səbətə At"}
        </button>
      </div>
    </div>
  );
}

function CheeseCake() {
  const catalogs = [
    { name: "San Sebastian CheeseCake", price: 55 },
    { name: "Şokoladlı CheeseCake", price: 50 },
    { name: "Çiyələkli CheeseCake", price: 45 },
    { name: "Moruqlu CheeseCake", price: 45 },
    { name: "Limonlu CheeseCake", price: 45 },
    { name: "Almalı CheeseCake", price: 45 },
  ];

  return (
    <>
      <div className='bloklar'>
        <h1 className='pagetortlarh1'>CheeseCakes</h1>
        <Link className='link sebetim' to="/sebetim">
          <button className='sebetimbutc'>Sebetim</button>
        </Link>
      </div>
      <div className='containercheesecake'>
        {catalogs.map((catalog, index) => (
          <CheeseItem key={index} name={catalog.name} price={catalog.price} />
        ))}
      </div>
    </>
  );
}

export default CheeseCake;



// import './cheescake.css';
// import cheesecake from './assets/cheesecake.png'
// import { useState } from 'react';
// import {Link} from 'react-router-dom';

// function CheeseItem({name, price}){
//    const [clicked,setClicked]= useState(false);

//    const handleClick = () => {
//       setClicked(!clicked)
//    };
//    return(
//       <div className='pagecatalog'>
//          <img src={cheesecake} className='imgpagecheesecake' alt={name}/>
//          <div className='text-container'>
//             <h1>{name}</h1>
//             <p>{price} AZN</p>
//             <button
//           onClick={handleClick}
//           style={{ backgroundColor: clicked ? " rgb(40, 225, 40)" : "black" }}
//           className='pagecheesecakeBut'
//         >
//           {clicked ? "Səbətdə" : "Səbətə At"}
//         </button>
//       </div>
//       </div>
//    );
// }
// function CheeseCake() {
// const catalogs = [
//    {name:"San Sebastian CheeseCake",price: 55},
//    {name:"Şokoladlı CheeseCake",price: 50},
//    {name:"Çiyələkli CheeseCake",price: 45},
//    {name:"Moruqlu CheeseCake",price: 45},
//    {name:"Limonlu CheeseCake",price: 45},
//    {name:"Almalı CheeseCake",price: 45},
// ];
// return(
// <>
// {/* <h1 className='pagecheesecakelarh1'>CheeseCake'ler</h1> */}
// <div className='bloklar'><h1 className='pagetortlarh1'>Şirniyyatlar</h1>
// <Link className='link sebetim' to="/sebetim"><button className='sebetimbutc'>Sebetim</button></Link></div> 
// <div className='containercheesecake'>
//    {catalogs.map((catalogs, index) => (
//       <CheeseItem key={index} name={catalogs.name} price={catalogs.price}/>
//    )
//    )}
// </div>
// </>
// );
// }
// export default CheeseCake



// import './cheescake.css'
// import cheesecake from './assets/cheesecake.png'

// function Cheescake() {
// return(
// <>
//    <h2><h1 className='pagecheesecakelarh1'>CheeseCake'ler</h1></h2>

//    <div className='containercheesecake'>

//   <div className='pagecatalog'>
//     <img src={cheesecake} className='imgpagecheesecake'></img>
//    <div className='text-container'>
//     <h1>San Sebastian CheeseCake</h1>
//     <p> 55 AZN</p>
//     <button className='pagecheesecakeBut'>Sebete at</button>
//    </div></div> 

//    <div className='pagecatalog'>
//     <img src={cheesecake} className='imgpagecheesecake'></img>
//    <div className='text-container'>
//     <h1>Sokaladli CheeseCake</h1>
//     <p> 45 AZN</p>
//     <button className='pagecheesecakeBut'>Sebete at</button>
//    </div></div>

//    <div className='pagecatalog'>
//     <img src={cheesecake} className='imgpagecheesecake'></img>
//    <div className='text-container'>
//     <h1>Ciyelekli CheeseCake</h1>
//     <p> 45 AZN</p>
//     <button className='pagecheesecakeBut'>Sebete at</button>
//    </div></div>

//    <div className='pagecatalog'>
//     <img src={cheesecake} className='imgpagecheesecake'></img>
//    <div className='text-container'>
//     <h1>Moruqlu CheeseCake</h1>
//     <p>45 AZN</p>
//     <button className='pagecheesecakeBut'>Sebete at</button>
//    </div></div>

//    <div className='pagecatalog'>
//     <img src={cheesecake} className='imgpagecheesecake'></img>
//    <div className='text-container'>
//     <h1>Limonli CheeseCake</h1>
//     <p> 45 AZN</p>
//     <button className='pagecheesecakeBut'>Sebete at</button>
//    </div></div>

//    <div className='pagecatalog'>
//     <img src={cheesecake} className='imgpagecheesecake'></img>
//    <div className='text-container'>
//     <h1>Almali CheeseCake</h1>
//     <p> 45 AZN</p>
//     <button className='pagecheesecakeBut'>Sebete at</button>
//    </div></div>

// </div>
// </>
// )
// }
// export default Cheescake